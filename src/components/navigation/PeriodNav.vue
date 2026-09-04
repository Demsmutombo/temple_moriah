<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { periods } from '@/data'

const route = useRoute()
const router = useRouter()
const open = ref(false)

function isCurrent(p) {
  if (p.path === '/histoire') return ['/histoire', '/construction', '/dedicace', '/vie-du-temple'].includes(route.path)
  if (p.path === '/epreuve') return ['/epreuve', '/apres-incendie', '/consolation', '/reconstruction'].includes(route.path)
  return route.path === p.path
}

const current = computed(() => periods.find(isCurrent) || periods[0])

function go(path) {
  open.value = false
  if (path !== route.path) router.push(path)
}
</script>

<template>
  <nav class="period-nav" aria-label="Les quatre périodes">
    <div class="period-mobile lg:hidden">
      <button type="button" class="period-now" :aria-expanded="open" @click="open = !open">
        <span>{{ current.roman }} {{ current.title }}</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </button>
      <ul v-if="open" class="period-menu">
        <li v-for="p in periods" :key="p.id">
          <button type="button" class="period-option" :class="{ 'is-current': isCurrent(p) }" @click="go(p.path)">
            {{ p.roman }} · {{ p.title }}
          </button>
        </li>
      </ul>
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
  padding: 0 var(--page-gutter) 0.65rem;
}
.period-now {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  width: 100%;
  padding: 0.7rem 1rem;
  border: 0;
  border-radius: 999px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  color: inherit;
  font-weight: 650;
  text-align: left;
}
.period-menu {
  margin: 0.45rem 0 0;
  padding: 0.4rem;
  list-style: none;
  background: var(--neu-bg);
  border-radius: 18px;
  box-shadow: var(--neu-raised);
}
.period-option {
  display: block;
  width: 100%;
  padding: 0.7rem 0.85rem;
  border: 0;
  border-radius: 14px;
  background: none;
  text-align: left;
  color: inherit;
  font-weight: 600;
}
.period-option.is-current {
  color: var(--neu-blue);
  box-shadow: var(--neu-inset);
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
