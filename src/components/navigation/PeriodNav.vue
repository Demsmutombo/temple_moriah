<script setup>
import { computed } from 'vue'
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

const current = computed(() => periods.find(isCurrent) || periods[0])
</script>

<template>
  <nav class="period-nav" aria-label="Les quatre périodes">
    <div class="period-mobile lg:hidden" role="tablist" :aria-label="current.title">
      <RouterLink
        v-for="p in periods"
        :key="p.id"
        :to="p.path"
        class="period-chip"
        :class="{ 'is-current': isCurrent(p) }"
        role="tab"
        :aria-selected="isCurrent(p)"
      >
        <span class="chip-roman">{{ p.roman }}</span>
        {{ p.title }}
      </RouterLink>
    </div>

    <div class="period-rail hidden lg:grid">
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
    </div>
  </nav>
</template>

<style scoped>
.period-nav {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 var(--page-gutter) 0.85rem;
}
.period-mobile {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.55rem;
  overflow-x: auto;
  padding: 0.2rem 0.1rem 0.45rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.period-mobile::-webkit-scrollbar {
  display: none;
}
.period-chip {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.62rem 0.95rem 0.62rem 0.75rem;
  border-radius: 999px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  color: inherit;
  font-size: 0.82rem;
  font-weight: 650;
  white-space: nowrap;
  text-decoration: none;
}
.chip-roman {
  color: var(--neu-blue);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
}
.period-chip.is-current {
  color: var(--neu-blue);
  box-shadow: var(--neu-inset), inset 3px 0 0 var(--neu-blue);
}
.period-rail {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}
.period-link {
  display: block;
  border-radius: 24px;
  padding: 1.1rem 1.15rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
}
.roman {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  color: var(--neu-blue);
}
.label {
  display: block;
  margin-top: 0.25rem;
  font-weight: 650;
  overflow-wrap: anywhere;
}
.is-current {
  box-shadow: var(--neu-inset);
  color: var(--neu-blue);
}
</style>
