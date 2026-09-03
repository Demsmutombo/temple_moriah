<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <component :is="item.path ? RouterLink : 'article'" :to="item.path || undefined" class="history-card">
    <span class="row-avatar" aria-hidden="true">{{ (item.title || 'H').charAt(0) }}</span>
    <div class="row-body">
      <h3 class="row-title">{{ item.title }}</h3>
      <p class="row-sub">{{ item.date || item.displayDate }}</p>
      <p v-if="item.description || item.summary" class="row-desc">
        {{ item.description || item.summary }}
      </p>
    </div>
    <span v-if="item.path" class="row-follow">Ouvrir</span>
  </component>
</template>

<style scoped>
.history-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  border-radius: 18px;
  padding: 0.75rem 0.85rem;
  text-decoration: none;
  color: inherit;
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
  margin-top: 0.12rem;
  font-size: 0.75rem;
  color: var(--color-muted);
}
.row-desc {
  display: none;
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
  .history-card {
    display: block;
    border-radius: 28px;
    padding: 1.5rem;
    box-shadow: var(--neu-raised);
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
    color: var(--neu-blue);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .row-desc {
    display: block;
    margin-top: 0.75rem;
    color: var(--color-ink-soft);
  }
}
</style>
