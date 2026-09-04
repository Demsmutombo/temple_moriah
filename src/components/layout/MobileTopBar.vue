<script setup>
import { useRouter } from 'vue-router'
import { useMobileNav } from '@/composables/useMobileNav'
import SiteLogo from '@/components/common/SiteLogo.vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import { site } from '@/data'

const router = useRouter()
const { isHome, pageTitle, openMore } = useMobileNav()

function goBack() {
  if (window.history.length > 1) router.back()
  else router.push('/')
}
</script>

<template>
  <header class="topbar lg:hidden">
    <div class="topbar-inner">
      <RouterLink v-if="isHome" to="/" class="topbar-logo" :aria-label="`${site.name} — accueil`">
        <SiteLogo size="sm" />
      </RouterLink>
      <button
        v-else
        type="button"
        class="topbar-btn"
        aria-label="Retour"
        @click="goBack"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M15.5 5.5 8.5 12l7 6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      <h1 class="topbar-title">{{ isHome ? site.name : pageTitle }}</h1>

      <div class="topbar-actions">
        <RouterLink to="/search" class="topbar-btn" aria-label="Recherche">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="6.4" stroke="currentColor" stroke-width="1.7" />
            <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </RouterLink>
        <ThemeToggle />
        <button type="button" class="topbar-btn" aria-label="Menu" @click="openMore">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <circle cx="12" cy="6" r="1.55" fill="currentColor" />
            <circle cx="12" cy="12" r="1.55" fill="currentColor" />
            <circle cx="12" cy="18" r="1.55" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60;
  flex-shrink: 0;
  padding-top: env(safe-area-inset-top, 0px);
  background: var(--neu-bg);
  box-shadow: var(--neu-tabbar-shadow);
}
.topbar-inner {
  display: grid;
  grid-template-columns: 2.7rem minmax(0, 1fr) auto;
  align-items: center;
  min-height: 3.35rem;
  padding: 0.4rem 0.75rem;
  gap: 0.45rem;
}
.topbar-logo {
  display: grid;
  place-items: center;
  width: 2.7rem;
  height: 2.7rem;
  overflow: hidden;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
}
.topbar-logo :deep(.site-logo) {
  width: 1.85rem;
  height: 1.4rem;
  object-fit: contain;
}
.topbar-title {
  margin: 0;
  text-align: center;
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: var(--color-ink);
  overflow-wrap: anywhere;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.topbar-actions {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  justify-self: end;
}
.topbar-btn {
  display: grid;
  place-items: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 50%;
  background: var(--neu-bg);
  color: var(--color-ink);
  box-shadow: var(--neu-raised-sm);
  border: 0;
  padding: 0;
}
.topbar-btn:active {
  box-shadow: var(--neu-inset);
}
</style>
