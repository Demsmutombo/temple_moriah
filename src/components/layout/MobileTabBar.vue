<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/images/logo.png'
import { useMobileNav } from '@/composables/useMobileNav'

const route = useRoute()
const { moreOpen, toggleMore } = useMobileNav()

const tabs = [
  {
    id: 'home',
    match: (path) => path === '/',
  },
  {
    id: 'history',
    match: (path) => ['/histoire', '/construction', '/dedicace', '/vie-du-temple'].includes(path),
  },
  {
    id: 'archives',
    match: (path) => ['/archives', '/galerie', '/mediatheque'].some((p) => path.startsWith(p)),
  },
  {
    id: 'voices',
    match: (path) => path.startsWith('/voix'),
  },
]

function isActive(id) {
  return tabs.find((t) => t.id === id)?.match(route.path)
}

const plusActive = computed(() => {
  if (moreOpen.value) return true
  return ['/epreuve', '/apres-incendie', '/consolation', '/reconstruction', '/livre-de-memoire'].some((p) =>
    route.path.startsWith(p),
  )
})
</script>

<template>
  <nav class="tabbar lg:hidden" aria-label="Navigation mobile">
    <RouterLink to="/" class="tab" :class="{ 'is-active': isActive('home') }">
      <span class="tab-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
        </svg>
      </span>
      <span class="tab-label">Accueil</span>
    </RouterLink>

    <RouterLink to="/histoire" class="tab" :class="{ 'is-active': isActive('history') }">
      <span class="tab-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.7" />
          <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
        </svg>
      </span>
      <span class="tab-label">Histoire</span>
    </RouterLink>

    <RouterLink
      to="/archives"
      class="tab tab-center"
      :class="{ 'is-active': isActive('archives') }"
      aria-label="Archives"
    >
      <span class="center-btn" aria-hidden="true">
        <img :src="logo" alt="" width="34" height="24" />
      </span>
      <span class="tab-label">Archives</span>
    </RouterLink>

    <RouterLink to="/voix" class="tab" :class="{ 'is-active': isActive('voices') }">
      <span class="tab-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="9" cy="8.5" r="3" stroke="currentColor" stroke-width="1.7" />
          <path d="M4.2 19c.7-2.6 2.7-4 4.8-4s4.1 1.4 4.8 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          <circle cx="17" cy="10" r="2.2" stroke="currentColor" stroke-width="1.7" />
        </svg>
      </span>
      <span class="tab-label">Voix</span>
    </RouterLink>

    <button
      type="button"
      class="tab"
      :class="{ 'is-active': plusActive }"
      aria-label="Plus de pages"
      :aria-expanded="moreOpen"
      @click="toggleMore"
    >
      <span class="tab-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="12" cy="8" r="3.1" stroke="currentColor" stroke-width="1.7" />
          <path d="M6 19.2c.8-3.1 3-4.8 6-4.8s5.2 1.7 6 4.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
        </svg>
      </span>
      <span class="tab-label">Plus</span>
    </button>
  </nav>
</template>

<style scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: end;
  height: calc(4.55rem + env(safe-area-inset-bottom, 0px));
  padding: 0.35rem 0.2rem calc(0.42rem + env(safe-area-inset-bottom, 0px));
  background: var(--neu-bg);
  box-shadow: var(--neu-tabbar-shadow);
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.18rem;
  min-height: 3.2rem;
  color: var(--color-muted);
  text-decoration: none;
  background: none;
  border: 0;
  padding: 0;
  touch-action: manipulation;
}
.tab-icon {
  position: relative;
  display: grid;
  place-items: center;
  height: 1.5rem;
}
.tab-label {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
}
.tab.is-active {
  color: var(--neu-blue);
}
.tab.is-active .tab-label::after {
  content: '';
  display: block;
  width: 14px;
  height: 3px;
  margin: 0.22rem auto 0;
  border-radius: 999px;
  background: var(--neu-blue);
}
.tab-center {
  position: relative;
}
.center-btn {
  position: absolute;
  left: 50%;
  bottom: 1.55rem;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 3.85rem;
  height: 3.85rem;
  padding: 0.42rem;
  overflow: hidden;
  border-radius: 50%;
  background: var(--neu-light);
  box-shadow: var(--neu-fab-shadow);
  border: 5px solid var(--neu-bg);
}
.center-btn img {
  width: 2.35rem;
  height: 2.35rem;
  max-width: none;
  object-fit: contain;
  object-position: center;
}
.tab-center.is-active .center-btn {
  box-shadow:
    var(--neu-fab-shadow),
    0 0 0 3px color-mix(in srgb, var(--neu-blue) 30%, transparent);
}
.tab-center .tab-label {
  position: relative;
  z-index: 1;
}
</style>
