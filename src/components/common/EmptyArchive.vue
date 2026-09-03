<script setup>
defineProps({
  title: { type: String, default: 'Archive à verser' },
  text: {
    type: String,
    default: 'Cette section est prête à recevoir une archive. Aucun contenu n’a été inventé.',
  },
})
</script>

<template>
  <div class="empty-archive">
    <p class="text-meta mb-3">Information à compléter</p>
    <p class="font-display text-xl text-ink mb-2">{{ title }}</p>
    <p class="text-caption max-w-xl">{{ text }}</p>
    <slot />
  </div>
</template>

<style scoped>
.empty-archive {
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
}
</style>
