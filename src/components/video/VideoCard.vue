<script setup>
defineProps({
  video: { type: Object, required: true },
})
</script>

<template>
  <article class="video-card">
    <RouterLink :to="`/mediatheque/${video.id}`" class="block group">
      <div class="thumb">
        <img v-if="video.thumbnail" :src="video.thumbnail" :alt="video.title" />
        <div v-else class="thumb-fallback">
          <span class="text-meta">{{ video.displayDate }}</span>
          <span class="play" aria-hidden="true">▶</span>
        </div>
      </div>
      <h3 class="font-display text-sm lg:text-xl mt-2 lg:mt-4 group-hover:text-gold">{{ video.title }}</h3>
      <p class="text-caption mt-1 lg:mt-2">{{ video.speaker }} · {{ video.displayDate }}</p>
    </RouterLink>
  </article>
</template>

<style scoped>
.video-card {
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
}
.video-card h3 {
  padding: 0.55rem 0.65rem 0;
}
.video-card .text-caption {
  padding: 0 0.65rem 0.7rem;
}
@media (min-width: 1024px) {
  .video-card {
    border-radius: 28px;
    padding: 1rem;
    box-shadow: var(--neu-raised);
  }
  .video-card h3,
  .video-card .text-caption {
    padding: 0;
  }
}
.thumb,
.thumb-fallback {
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  color: var(--neu-blue);
  overflow: hidden;
}
.thumb-fallback {
  display: grid;
  place-content: center;
  text-align: center;
  gap: 0.75rem;
}
.play {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: var(--neu-raised-sm);
  font-size: 0.75rem;
}
</style>
