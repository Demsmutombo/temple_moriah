<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { activePlayerId } from '@/composables/useYoutubePlayback'
import { formatTimecode, loadYoutubeApi, youtubePlayerVars, youtubeThumb } from '@/utils/youtube'

const props = defineProps({
  youtubeId: { type: String, required: true },
  title: { type: String, default: 'Vidéo' },
  autoplay: { type: Boolean, default: false },
  start: { type: Number, default: 0 },
  end: { type: Number, default: 0 },
})
const emit = defineEmits(['ended', 'play'])

const instanceId = `tm-yt-${Math.random().toString(36).slice(2, 10)}`
const host = ref(null)
const shell = ref(null)
const frame = ref(0)
const ready = ref(false)
const ended = ref(false)
const paused = ref(true)
const muted = ref(false)
const expanded = ref(false)
const duration = ref(0)
const current = ref(0)
const thumbBroken = ref(false)
const thumb = computed(() => youtubeThumb(props.youtubeId, 'hqdefault'))
const progress = computed(() => (duration.value ? (current.value / duration.value) * 100 : 0))

let player = null
let poll = 0
let nativeFs = false

function origin() {
  return typeof window !== 'undefined' ? window.location.origin : ''
}

function clearPoll() {
  if (poll) {
    window.clearInterval(poll)
    poll = 0
  }
}

function destroyPlayer() {
  clearPoll()
  if (player) {
    try {
      player.stopVideo?.()
      player.destroy()
    } catch {
      /* ignore */
    }
    player = null
  }
  ready.value = false
  paused.value = true
  current.value = props.start || 0
}

async function mountPlayer(shouldPlay) {
  destroyPlayer()
  frame.value += 1
  ended.value = false
  await nextTick()
  if (!host.value) return
  const YT = await loadYoutubeApi()
  activePlayerId.value = instanceId
  player = new YT.Player(host.value, {
    videoId: props.youtubeId,
    width: '100%',
    height: '100%',
    playerVars: youtubePlayerVars(props.youtubeId, {
      autoplay: shouldPlay,
      origin: origin(),
      start: props.start,
      end: props.end,
    }),
    events: {
      onReady(event) {
        ready.value = true
        duration.value = event.target.getDuration() || 0
        if (props.start) event.target.seekTo(props.start, true)
        if (shouldPlay) event.target.playVideo()
        poll = window.setInterval(syncTime, 250)
      },
      onStateChange(event) {
        const state = window.YT?.PlayerState
        if (!state) return
        if (event.data === state.PLAYING) {
          ended.value = false
          paused.value = false
          activePlayerId.value = instanceId
          emit('play')
        }
        if (event.data === state.PAUSED) paused.value = true
        if (event.data === state.ENDED) finish()
      },
    },
  })
}

function syncTime() {
  if (!player?.getCurrentTime) return
  try {
    current.value = player.getCurrentTime() || 0
    duration.value = player.getDuration() || duration.value
    if (props.end && current.value >= props.end - 0.15) finish()
  } catch {
    /* ignore */
  }
}

function finish() {
  if (ended.value) return
  ended.value = true
  paused.value = true
  try {
    const stopAt = props.end || Math.max(0, (player?.getDuration?.() || 0) - 0.35)
    player?.seekTo?.(stopAt, true)
    player?.pauseVideo?.()
  } catch {
    /* ignore */
  }
  emit('ended')
}

function start() {
  ended.value = false
  mountPlayer(true)
}

function replay() {
  ended.value = false
  if (player?.seekTo) {
    player.seekTo(props.start || 0, true)
    player.playVideo()
    activePlayerId.value = instanceId
    return
  }
  start()
}

function togglePlay() {
  if (ended.value) {
    replay()
    return
  }
  if (!player) {
    start()
    return
  }
  if (paused.value) {
    player.playVideo()
    activePlayerId.value = instanceId
  } else {
    player.pauseVideo()
  }
}

function toggleMute() {
  if (!player) return
  if (muted.value) {
    player.unMute()
    muted.value = false
  } else {
    player.mute()
    muted.value = true
  }
}

function seek(event) {
  if (!player || !duration.value) return
  const next = (Number(event.target.value) / 100) * duration.value
  player.seekTo(next, true)
  current.value = next
  ended.value = false
}

function fsElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null
}

function lockPage(lock) {
  if (lock) {
    document.body.style.overflow = 'hidden'
    return
  }
  if (!document.querySelector('.modal-root')) {
    document.body.style.overflow = ''
  }
}

function enterExpand() {
  expanded.value = true
  lockPage(true)
  const el = shell.value
  const req = el?.requestFullscreen || el?.webkitRequestFullscreen
  if (!req) return
  Promise.resolve(req.call(el))
    .then(() => {
      nativeFs = Boolean(fsElement() === el)
    })
    .catch(() => {
      nativeFs = false
    })
}

function exitExpand() {
  expanded.value = false
  lockPage(false)
  const exit = document.exitFullscreen || document.webkitExitFullscreen
  if (nativeFs && fsElement() && exit) {
    nativeFs = false
    Promise.resolve(exit.call(document)).catch(() => {})
    return
  }
  nativeFs = false
}

function toggleExpand() {
  if (expanded.value) exitExpand()
  else enterExpand()
}

function onFsChange() {
  if (fsElement() === shell.value) {
    nativeFs = true
    expanded.value = true
    lockPage(true)
    return
  }
  if (nativeFs) {
    nativeFs = false
    expanded.value = false
    lockPage(false)
  }
}

function onKey(event) {
  if (event.key === 'Escape' && expanded.value) exitExpand()
}

watch(
  () => props.autoplay,
  (value) => {
    if (value) start()
  },
)

watch(
  () => props.youtubeId,
  () => {
    destroyPlayer()
    ended.value = false
    if (props.autoplay) start()
  },
)

watch(activePlayerId, (id) => {
  if (id !== instanceId && player && !paused.value) {
    try {
      player.pauseVideo()
    } catch {
      /* ignore */
    }
  }
})

onMounted(() => {
  document.addEventListener('fullscreenchange', onFsChange)
  document.addEventListener('webkitfullscreenchange', onFsChange)
  window.addEventListener('keydown', onKey)
  if (props.autoplay) start()
})

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', onFsChange)
  document.removeEventListener('webkitfullscreenchange', onFsChange)
  window.removeEventListener('keydown', onKey)
  if (expanded.value) exitExpand()
  if (activePlayerId.value === instanceId) activePlayerId.value = ''
  destroyPlayer()
})
</script>

<template>
  <div ref="shell" class="yt" :class="{ 'is-ended': ended, 'is-expanded': expanded }">
    <button
      v-if="!ready && !autoplay"
      type="button"
      class="yt-poster"
      :aria-label="`Lire : ${title}`"
      @click="start"
    >
      <img
        v-if="!thumbBroken"
        :src="thumb"
        :alt="title"
        width="1280"
        height="720"
        loading="lazy"
        @error="thumbBroken = true"
      />
      <span class="yt-play" aria-hidden="true">▶</span>
    </button>

    <div class="yt-stage">
      <div :key="frame" ref="host" class="yt-host" />
    </div>

    <button
      v-if="ready && !ended"
      type="button"
      class="yt-shield"
      :aria-label="paused ? `Lire : ${title}` : `Pause : ${title}`"
      @click="togglePlay"
    />

    <button
      v-if="expanded"
      type="button"
      class="yt-reduce"
      aria-label="Réduire"
      @click="exitExpand"
    >
      Réduire
    </button>

    <div v-if="ready && !ended" class="yt-bar">
      <button type="button" class="yt-ctrl" :aria-label="paused ? 'Lire' : 'Pause'" @click="togglePlay">
        {{ paused ? '▶' : '❚❚' }}
      </button>
      <input
        class="yt-seek"
        type="range"
        min="0"
        max="100"
        step="0.1"
        :value="progress"
        :aria-label="`Progression ${title}`"
        @input="seek"
      />
      <span class="yt-time">{{ formatTimecode(current) }}<template v-if="duration"> / {{ formatTimecode(duration) }}</template></span>
      <button type="button" class="yt-ctrl" :aria-label="muted ? 'Son' : 'Muet'" @click="toggleMute">
        {{ muted ? '🔇' : '🔊' }}
      </button>
      <button type="button" class="yt-ctrl yt-expand" :aria-label="expanded ? 'Réduire' : 'Agrandir'" @click="toggleExpand">
        <svg v-if="!expanded" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div v-if="ended" class="yt-end">
      <p>Fin de la captation</p>
      <div class="yt-end-actions">
        <button type="button" class="neu-btn-primary" @click="replay">Revoir</button>
        <button v-if="expanded" type="button" class="neu-btn" @click="exitExpand">Réduire</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yt {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 22px;
  background: #10151c;
}
.yt.is-expanded {
  position: fixed;
  inset: 0;
  z-index: 220;
  width: 100vw;
  height: 100dvh;
  max-width: 100vw;
  aspect-ratio: auto;
  border-radius: 0;
  background: #000;
}
.yt.is-expanded .yt-stage {
  inset: auto;
  top: 50%;
  left: 50%;
  width: min(100vw, calc(100dvh * 16 / 9));
  height: min(100dvh, calc(100vw * 9 / 16));
  transform: translate(-50%, -50%);
}
.yt-stage,
.yt-host,
.yt-host :deep(iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
.yt-poster,
.yt-poster img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  display: block;
  object-fit: cover;
}
.yt-poster {
  z-index: 3;
  cursor: pointer;
  background: none;
}
.yt-play {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 3.4rem;
  height: 3.4rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #fff;
  background: color-mix(in srgb, var(--neu-blue) 88%, #000);
  font-size: 0.85rem;
  pointer-events: none;
}
.yt-shield {
  position: absolute;
  inset: 0 0 3.25rem 0;
  z-index: 3;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}
.yt-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 0.7rem calc(0.75rem + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(transparent, rgba(8, 12, 18, 0.92));
}
.yt-ctrl {
  flex-shrink: 0;
  width: 2.35rem;
  height: 2.35rem;
  border: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--neu-blue) 82%, #000);
  color: #fff;
  font-size: 0.68rem;
  cursor: pointer;
  display: grid;
  place-items: center;
}
.yt-expand {
  background: #fff;
  color: var(--neu-blue);
}
.yt-reduce {
  position: absolute;
  top: calc(0.65rem + env(safe-area-inset-top, 0px));
  right: 0.7rem;
  z-index: 6;
  border: 0;
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  background: #fff;
  color: var(--neu-blue);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
}
.yt-seek {
  flex: 1;
  min-width: 0;
  height: 1.4rem;
  accent-color: var(--neu-blue);
}
.yt-time {
  flex-shrink: 0;
  min-width: 4.4rem;
  color: #fff;
  font-size: 0.68rem;
  font-variant-numeric: tabular-nums;
}
.yt-end {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 0.85rem;
  background: #10151c;
  color: #fff;
}
.yt-end p {
  margin: 0;
  font-weight: 650;
}
.yt-end-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
}
</style>
