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
const frame = ref(0)
const ready = ref(false)
const ended = ref(false)
const paused = ref(true)
const muted = ref(false)
const duration = ref(0)
const current = ref(0)
const thumbBroken = ref(false)
const thumb = computed(() => youtubeThumb(props.youtubeId, 'hqdefault'))
const progress = computed(() => (duration.value ? (current.value / duration.value) * 100 : 0))

let player = null
let poll = 0

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
  if (props.autoplay) start()
})

onBeforeUnmount(() => {
  if (activePlayerId.value === instanceId) activePlayerId.value = ''
  destroyPlayer()
})
</script>

<template>
  <div class="yt" :class="{ 'is-ended': ended }">
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
      <span class="yt-time">{{ formatTimecode(current) }}</span>
      <button type="button" class="yt-ctrl" :aria-label="muted ? 'Son' : 'Muet'" @click="toggleMute">
        {{ muted ? '🔇' : '🔊' }}
      </button>
    </div>

    <div v-if="ended" class="yt-end">
      <p>Fin de la captation</p>
      <button type="button" class="neu-btn-primary" @click="replay">Revoir</button>
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
  gap: 0.45rem;
  padding: 0.55rem 0.65rem 0.65rem;
  background: linear-gradient(transparent, rgba(8, 12, 18, 0.86));
}
.yt-ctrl {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--neu-blue) 82%, #000);
  color: #fff;
  font-size: 0.62rem;
  cursor: pointer;
}
.yt-seek {
  flex: 1;
  min-width: 0;
  accent-color: var(--neu-blue);
}
.yt-time {
  flex-shrink: 0;
  min-width: 2.2rem;
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
</style>
