<script setup>
defineProps({
  item: { type: Object, required: true },
})

function initial(item) {
  const source = item.title || item.type || 'A'
  return source.charAt(0).toUpperCase()
}

function itemPath(item) {
  if (item.type === 'vidéos') return `/mediatheque/${item.id}`
  if (item.type === 'photographies') return '/galerie'
  if (item.type === 'discours') return item.id ? `/voix/pasteur/${item.id}` : '/voix/pasteur'
  return '/archives'
}
</script>

<template>
  <RouterLink :to="itemPath(item)" class="archive-card">
    <span class="row-avatar" aria-hidden="true">{{ initial(item) }}</span>
    <div class="row-body">
      <h3 class="row-title">{{ item.title }}</h3>
      <p class="row-sub">{{ item.categoryLabel || item.type }}</p>
    </div>
    <span class="row-follow">Ouvrir</span>
  </RouterLink>
</template>

<style scoped>
.archive-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  border-radius: 18px;
  padding: 0.75rem 0.85rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid color-mix(in srgb, var(--neu-blue) 10%, transparent);
}
.row-avatar {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  font-weight: 700;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.row-title {
  font-family: var(--font-display);
  font-size: 0.95rem;
  line-height: 1.25;
}
.row-sub {
  margin-top: 0.15rem;
  font-size: 0.75rem;
  color: var(--color-muted);
}
.row-body {
  min-width: 0;
  flex: 1;
}
.row-follow {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 650;
  color: var(--color-ink);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
  background: transparent;
}
@media (min-width: 1024px) {
  .archive-card {
    display: block;
    border-radius: 28px;
    padding: 1.35rem 1.4rem;
    box-shadow: var(--neu-raised);
    border-bottom: 0;
  }
  .row-avatar,
  .row-follow {
    display: none;
  }
  .row-title {
    font-size: 1.5rem;
    margin-top: 0.4rem;
  }
  .row-sub {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--neu-blue);
  }
}
</style>
