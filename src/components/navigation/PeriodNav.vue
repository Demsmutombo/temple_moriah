<script setup>
import { useRoute } from 'vue-router'
import { periods } from '@/data'

const route = useRoute()

function isCurrent(p) {
  if (p.id === 'vision') return route.path === '/histoire'
  if (p.id === 'construction') return route.path === '/construction'
  if (p.id === 'vie') return ['/dedicace', '/vie-du-temple'].includes(route.path)
  if (p.id === 'epreuve') return ['/epreuve', '/apres-incendie', '/consolation', '/reconstruction'].includes(route.path)
  return route.path === p.path
}
</script>

<template>
  <nav class="period-nav" aria-label="Les quatre périodes">
    <div class="period-list">
      <RouterLink
        v-for="p in periods"
        :key="p.id"
        :to="p.path"
        class="period-link"
        :class="{ 'is-current': isCurrent(p) }"
        :aria-current="isCurrent(p) ? 'page' : undefined"
      >
        <span class="roman">{{ p.roman }}</span>
        <span class="copy">
          <span class="label">{{ p.title }}</span>
          <span class="years">{{ p.years }}</span>
        </span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.period-nav {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 var(--page-gutter) 1rem;
}
.period-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
}
.period-link {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
  padding: 0.85rem 1rem;
  border-radius: 22px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  color: inherit;
  text-decoration: none;
}
.roman {
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--neu-blue);
}
.copy {
  display: grid;
  gap: 0.12rem;
  min-width: 0;
}
.label {
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.25;
}
.years {
  font-size: 0.72rem;
  line-height: 1.3;
  color: var(--color-muted);
}
.period-link.is-current {
  box-shadow: var(--neu-inset);
  color: var(--neu-blue);
}
.period-link.is-current .years {
  color: color-mix(in srgb, var(--neu-blue) 70%, var(--color-muted));
}
@media (min-width: 640px) {
  .period-list {
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }
}
@media (min-width: 1024px) {
  .period-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
  }
  .period-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    padding: 1.15rem 1.2rem 1.2rem;
    border-radius: 24px;
  }
  .label {
    font-size: 1.02rem;
  }
}
</style>
