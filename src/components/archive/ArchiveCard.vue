<script setup>
import { computed, ref } from 'vue'
import { photoSrc, imageForEvent } from '@/utils/archiveImage'
import { youtubeThumb } from '@/utils/youtube'

const props = defineProps({
  item: { type: Object, required: true },
})

const broken = ref(false)

const typeLabel = computed(() => {
  const type = props.item.type
  if (type === 'vidéos') return 'Vidéo'
  if (type === 'photographies') return 'Photo'
  if (type === 'discours') return 'Discours'
  if (type === 'pdf' || type === 'documents') return 'Document'
  if (type === 'messages') return 'Message'
  return props.item.categoryLabel || type || 'Archive'
})

const kicker = computed(() =>
  [typeLabel.value, props.item.categoryLabel].filter((part, i, all) => part && all.indexOf(part) === i).join(' · '),
)

const cover = computed(() => {
  const item = props.item
  if (item.cover) return item.cover
  if (item.thumbnail) return item.thumbnail
  if (item.youtubeId) return youtubeThumb(item.youtubeId)
  if (item.eventId) return imageForEvent(item.eventId)
  if (item.category === 'dedicace') return photoSrc('ph-dedicace-vue')
  if (item.category === 'construction') return photoSrc('ph-toiture-avant')
  if (item.category === 'reconstruction') return photoSrc('ph-culte-ciel-ouvert')
  if (item.category === 'apres-incendie' || item.category === 'incendie') return photoSrc('ph-facade-apres')
  if (item.type === 'photographies') return photoSrc('ph-dedicace-vue')
  if (item.type === 'discours' || item.type === 'messages') return photoSrc('ph-sanctuaire-avant')
  return photoSrc('ph-facade-avant')
})

function itemPath(item) {
  if (item.type === 'vidéos') return `/mediatheque/${item.id}`
  if (item.type === 'photographies') return '/galerie'
  if (item.type === 'discours') return item.id ? `/voix/pasteur/${item.id}` : '/voix/pasteur'
  if (item.viewerType === 'pdf' || item.type === 'pdf') return `/archives/${item.id}`
  return '/archives'
}
</script>

<template>
  <RouterLink :to="itemPath(item)" class="archive-card">
    <span class="cover" aria-hidden="true">
      <img
        v-if="cover && !broken"
        :src="cover"
        alt=""
        width="320"
        height="200"
        loading="lazy"
        @error="broken = true"
      />
      <span v-else class="cover-fallback">{{ typeLabel.charAt(0) }}</span>
      <span v-if="item.type === 'vidéos'" class="play">▶</span>
    </span>
    <span class="copy">
      <span v-if="kicker" class="kicker">{{ kicker }}</span>
      <span class="title">{{ item.title }}</span>
      <span v-if="item.date || item.speaker" class="meta">
        {{ [item.date, item.speaker].filter(Boolean).join(' · ') }}
      </span>
    </span>
  </RouterLink>
</template>

<style scoped>
.archive-card {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  min-width: 0;
  padding: 0.7rem;
  border-radius: 22px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  text-decoration: none;
  color: inherit;
}
.cover {
  position: relative;
  flex: 0 0 5.6rem;
  width: 5.6rem;
  height: 5.6rem;
  overflow: hidden;
  border-radius: 16px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.cover img,
.cover-fallback {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.cover-fallback {
  display: grid;
  place-items: center;
  font-weight: 700;
  color: var(--neu-blue);
}
.play {
  position: absolute;
  inset: auto 0.4rem 0.4rem auto;
  width: 1.35rem;
  height: 1.35rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--neu-blue) 88%, #000);
  color: #fff;
  font-size: 0.48rem;
}
.copy {
  display: grid;
  gap: 0.18rem;
  min-width: 0;
  flex: 1;
}
.kicker {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--neu-blue);
}
.title {
  font-family: var(--font-display);
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.28;
  overflow-wrap: break-word;
}
.meta {
  font-size: 0.75rem;
  line-height: 1.35;
  color: var(--color-muted);
}
@media (min-width: 1024px) {
  .archive-card {
    gap: 1.15rem;
    padding: 0.85rem 1rem;
    border-radius: 26px;
    box-shadow: var(--neu-raised);
  }
  .cover {
    flex-basis: 7.2rem;
    width: 7.2rem;
    height: 5.1rem;
  }
  .title {
    font-size: 1.2rem;
  }
}
</style>
