<script setup>
defineProps({
  entry: { type: Object, required: true },
})
</script>

<template>
  <article class="mem-card">
    <p class="text-meta text-gold">
      {{ new Date(entry.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}
    </p>
    <h3 class="font-display text-2xl mt-2">{{ entry.name }}</h3>
    <p class="text-caption">{{ entry.place }}</p>
    <p class="mt-4 text-ink-soft leading-relaxed">{{ entry.message }}</p>
    <p v-if="entry.souvenir" class="mt-3 italic text-muted">{{ entry.souvenir }}</p>
    <p v-if="entry.status === 'pending_moderation'" class="text-meta mt-4 text-gold">En attente de modération</p>
  </article>
</template>

<style scoped>
.mem-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  border-radius: 18px;
  padding: 0.85rem 0.95rem;
  margin-bottom: 0.5rem;
}
.mem-card .text-2xl {
  font-size: 0.98rem;
}
.mem-card .mt-4 {
  display: none;
}
@media (min-width: 1024px) {
  .mem-card {
    display: block;
    border-radius: 28px;
    padding: 1.5rem;
    box-shadow: var(--neu-raised);
    margin-bottom: 1rem;
  }
  .mem-card .text-2xl {
    font-size: 1.5rem;
  }
  .mem-card .mt-4 {
    display: block;
  }
}
</style>
