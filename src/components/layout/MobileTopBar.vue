<script setup>
import { useRouter } from 'vue-router'
import { useMobileNav } from '@/composables/useMobileNav'

const router = useRouter()
const { isHome, pageTitle, openMore } = useMobileNav()

function goBack() {
  if (window.history.length > 1) router.back()
  else router.push('/')
}
</script>

<template>
  <header class="topbar lg:hidden" :class="{ 'is-home': isHome }">
    <div class="topbar-inner">
      <button
        v-if="!isHome"
        type="button"
        class="topbar-btn"
        aria-label="Retour"
        @click="goBack"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
          <path d="M15.5 5.5 8.5 12l7 6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <span v-else class="topbar-btn topbar-ghost" aria-hidden="true" />

      <h1 class="topbar-title">{{ isHome ? 'Temple Moriah' : pageTitle }}</h1>

      <button type="button" class="topbar-btn" aria-label="Menu" @click="openMore">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="12" cy="6" r="1.55" fill="currentColor" />
          <circle cx="12" cy="12" r="1.55" fill="currentColor" />
          <circle cx="12" cy="18" r="1.55" fill="currentColor" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60;
  padding-top: env(safe-area-inset-top, 0px);
  background: color-mix(in srgb, var(--neu-bg) 94%, transparent);
}
.topbar.is-home {
  background: transparent;
  backdrop-filter: none;
}
.topbar-inner {
  display: grid;
  grid-template-columns: 2.6rem 1fr 2.6rem;
  align-items: center;
  min-height: 3.15rem;
  padding: 0.35rem 1rem;
  gap: 0.5rem;
}
.topbar-title {
  margin: 0;
  text-align: center;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--color-ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topbar.is-home .topbar-title {
  color: transparent;
}
.topbar-btn {
  display: grid;
  place-items: center;
  width: 2.45rem;
  height: 2.45rem;
  justify-self: start;
  border-radius: 50%;
  background: var(--neu-bg);
  color: var(--color-ink);
  box-shadow: var(--neu-raised-sm);
  border: 0;
  padding: 0;
}
.topbar-inner > .topbar-btn:last-child {
  justify-self: end;
}
.topbar-ghost {
  visibility: hidden;
  box-shadow: none;
}
.topbar-btn:active {
  box-shadow: var(--neu-inset);
}
.topbar.is-home .topbar-btn {
  background: color-mix(in srgb, var(--neu-bg) 88%, transparent);
}
</style>
