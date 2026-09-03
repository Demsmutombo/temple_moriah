<script setup>
defineProps({
  src: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="player">
    <video v-if="src" :src="src" controls :title="title" class="w-full rounded-[22px]" />
    <div v-else class="player-empty">
      <p class="text-meta">Captation à verser</p>
      <p class="font-display text-2xl mt-2">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped>
.player {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border-radius: 28px;
  padding: 0.75rem;
  color: var(--color-ink);
}
.player-empty {
  aspect-ratio: 16 / 9;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 22px;
  box-shadow: var(--neu-inset);
}
</style>
