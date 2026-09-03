<script setup>
defineProps({
  kind: { type: String, default: 'narration' },
  label: { type: String, default: '' },
})

const labels = {
  fait: 'Fait historique',
  parole: 'Parole',
  temoignage: 'Témoignage',
  citation_biblique: 'Citation biblique',
  narration: 'Narration éditoriale',
}
</script>

<template>
  <span class="kind-badge">
    {{ label || labels[kind] || kind }}
  </span>
</template>

<style scoped>
.kind-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-ui);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
}
</style>
