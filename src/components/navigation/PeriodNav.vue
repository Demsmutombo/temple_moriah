<script setup>
import { periods } from '@/data'
import { useRoute } from 'vue-router'

const route = useRoute()

function isCurrent(p) {
  if (p.path === '/histoire') return ['/histoire', '/construction', '/dedicace', '/vie-du-temple'].includes(route.path)
  if (p.path === '/epreuve') return ['/epreuve', '/apres-incendie', '/consolation', '/reconstruction'].includes(route.path)
  return route.path === p.path
}
</script>

<template>
  <nav class="period-rail" aria-label="Les quatre périodes">
    <RouterLink
      v-for="p in periods"
      :key="p.id"
      :to="p.path"
      class="period-link"
      :class="{ 'is-current': isCurrent(p) }"
    >
      <span class="roman">{{ p.roman }}</span>
      <span class="label">{{ p.title }}</span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.period-rail {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem 0.4rem;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.period-rail::-webkit-scrollbar {
  display: none;
}
.period-link {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  box-shadow: none;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 14%, transparent);
  border-radius: 999px;
  padding: 0.48rem 0.95rem;
}
.roman {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--neu-blue);
}
.label {
  font-weight: 650;
  font-size: 1rem;
  letter-spacing: -0.02em;
}
.is-current {
  border-color: transparent;
  background: #fff;
  box-shadow: var(--neu-raised-sm);
  color: var(--color-ink);
}
@media (min-width: 1024px) {
  .period-rail {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: visible;
    gap: 1rem;
    padding: 0 1.25rem;
  }
  .period-link {
    display: block;
    border-radius: 24px;
    padding: 1.1rem 1.15rem;
    background: var(--neu-bg);
    border: 0;
    box-shadow: var(--neu-raised);
  }
  .is-current {
    box-shadow: var(--neu-inset);
    color: var(--neu-blue);
    background: var(--neu-bg);
  }
}
</style>
