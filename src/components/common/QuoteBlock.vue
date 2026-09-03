<script setup>
defineProps({
  text: { type: String, required: true },
  attribution: { type: String, default: '' },
  kind: { type: String, default: 'parole' },
  note: { type: String, default: '' },
})
</script>

<template>
  <blockquote class="quote-block">
    <p class="font-display italic text-xl md:text-3xl leading-snug text-ink">« {{ text }} »</p>
    <footer v-if="attribution || note" class="mt-5">
      <cite v-if="attribution" class="not-italic text-meta">{{ attribution }}</cite>
      <p v-if="note" class="text-caption mt-2">{{ note }}</p>
    </footer>
  </blockquote>
</template>

<style scoped>
.quote-block {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border-radius: 28px;
  padding: 1.75rem 1.5rem;
}
</style>
