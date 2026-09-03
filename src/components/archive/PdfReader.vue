<script setup>
defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'Document' },
})
</script>

<template>
  <div class="pdf-reader">
    <iframe :src="src" :title="title" />
    <a class="pdf-open" :href="src" target="_blank" rel="noopener noreferrer">Ouvrir le document</a>
  </div>
</template>

<style scoped>
.pdf-reader {
  display: grid;
  gap: 0.75rem;
}
.pdf-reader iframe {
  width: 100%;
  min-height: 70vh;
  border: 0;
  border-radius: 18px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.pdf-open {
  justify-self: start;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  color: var(--neu-blue);
}
@media (min-width: 1024px) {
  .pdf-reader iframe {
    min-height: 80vh;
    border-radius: 28px;
    box-shadow: var(--neu-raised);
  }
}
</style>
