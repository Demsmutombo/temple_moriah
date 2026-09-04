<script setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoMark from '@/assets/images/logo.png'
import FacadeEmblem from '@/components/hero/FacadeEmblem.vue'
import { navItems, site } from '@/data'
import { useMobileNav } from '@/composables/useMobileNav'

const logoSources = [logoMark, '/logo.png', '/logo.jfif']
const logoIndex = ref(0)
const logoBroken = ref(false)
const logoSrc = computed(() => logoSources[logoIndex.value])

function onLogoError() {
  if (logoIndex.value < logoSources.length - 1) {
    logoIndex.value += 1
    return
  }
  logoBroken.value = true
}

const route = useRoute()
const { moreOpen, closeMore, sharePage, copyLink } = useMobileNav()
const copied = ref(false)
const openGroup = ref('')

const currentGroup = computed(() => {
  const match = navItems.find((item) => {
    if (item.children?.some((child) => child.path === route.path)) return true
    return item.path !== '/' && route.path.startsWith(item.path)
  })
  return match?.path || ''
})

watch(
  () => route.fullPath,
  () => closeMore(),
)

watch(moreOpen, (open) => {
  const main = document.getElementById('contenu')
  if (main) main.style.overflowY = open ? 'hidden' : ''
  if (open) {
    copied.value = false
    openGroup.value = currentGroup.value
  }
})

onUnmounted(() => {
  const main = document.getElementById('contenu')
  if (main) main.style.overflowY = ''
})

async function onCopy() {
  copied.value = await copyLink()
}

function toggleGroup(path) {
  openGroup.value = openGroup.value === path ? '' : path
}

function isChildActive(path) {
  return route.path === path
}
</script>

<template>
  <Teleport to="body">
    <div v-show="moreOpen" class="sheet-root lg:hidden" :inert="!moreOpen">
      <button type="button" class="sheet-backdrop" aria-label="Fermer le menu" @click="closeMore" />
      <section class="sheet" role="dialog" aria-modal="true" aria-labelledby="more-title">
        <div class="sheet-handle" aria-hidden="true" />

        <header class="sheet-head">
          <h2 id="more-title">Menu</h2>
          <button type="button" class="sheet-close" aria-label="Fermer" @click="closeMore">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
          </button>
        </header>

        <RouterLink to="/" class="brand" @click="closeMore">
          <img
            v-if="!logoBroken"
            :src="logoSrc"
            alt=""
            class="brand-mark"
            width="120"
            height="80"
            @error="onLogoError"
          />
          <span v-else class="brand-fallback" aria-hidden="true">
            <FacadeEmblem variant="gold" />
          </span>
          <span class="brand-text">
            <span class="brand-name">{{ site.name }}</span>
            <span class="brand-meta">{{ site.church }} · {{ site.city }}</span>
          </span>
        </RouterLink>

        <div class="actions" role="group" aria-label="Actions">
          <button type="button" class="action" @click="sharePage">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <circle cx="18" cy="5" r="2.1" stroke="currentColor" stroke-width="1.7" />
              <circle cx="6" cy="12" r="2.1" stroke="currentColor" stroke-width="1.7" />
              <circle cx="18" cy="19" r="2.1" stroke="currentColor" stroke-width="1.7" />
              <path d="M8 12.8 16 18.2M16 5.8 8 11.2" stroke="currentColor" stroke-width="1.7" />
            </svg>
            Partager
          </button>
          <button type="button" class="action" @click="onCopy">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7" />
              <path d="M6 16V6.8A1.8 1.8 0 0 1 7.8 5H16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
            </svg>
            {{ copied ? 'Copié' : 'Copier le lien' }}
          </button>
          <RouterLink to="/livre-de-memoire" class="action" @click="closeMore">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M5 5.5h9.5A3.5 3.5 0 0 1 18 9v10.5H8.5A3.5 3.5 0 0 1 5 16V5.5Z" stroke="currentColor" stroke-width="1.7" />
            </svg>
            Mémoire
          </RouterLink>
        </div>

        <nav class="menu" aria-label="Parcourir le site">
          <p class="menu-label">Parcourir</p>
          <ul class="menu-list">
            <li v-for="item in navItems" :key="item.path" class="menu-block">
              <RouterLink
                v-if="!item.children"
                :to="item.path"
                class="menu-row"
                :class="{ 'is-current': route.path === item.path }"
                @click="closeMore"
              >
                <span>{{ item.label }}</span>
              </RouterLink>
              <template v-else>
                <button
                  type="button"
                  class="menu-row"
                  :class="{ 'is-open': openGroup === item.path, 'is-current': currentGroup === item.path }"
                  :aria-expanded="openGroup === item.path"
                  @click="toggleGroup(item.path)"
                >
                  <span>{{ item.label }}</span>
                  <svg class="chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                    <path d="m8 10 4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <ul v-if="openGroup === item.path" class="menu-sub">
                  <li v-for="child in item.children" :key="child.path">
                    <RouterLink
                      :to="child.path"
                      class="menu-link"
                      :class="{ 'is-current': isChildActive(child.path) }"
                      @click="closeMore"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </Teleport>
</template>

<style scoped>
.sheet-root {
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.sheet-backdrop {
  position: absolute;
  inset: 0;
  border: 0;
  background: color-mix(in srgb, #121924 42%, transparent);
}
.sheet {
  position: relative;
  max-height: min(86dvh, 720px);
  overflow: auto;
  padding: 0.55rem 1.15rem calc(5.4rem + env(safe-area-inset-bottom, 0px));
  background: var(--neu-bg);
  border-radius: 24px 24px 0 0;
}
.sheet-handle {
  width: 36px;
  height: 4px;
  margin: 0 auto 0.7rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-ink) 16%, transparent);
}
.sheet-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.sheet-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: -0.03em;
}
.sheet-close {
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border: 0;
  border-radius: 50%;
  color: var(--color-ink);
  background: color-mix(in srgb, var(--color-ink) 6%, transparent);
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 0.15rem 0.95rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid color-mix(in srgb, var(--neu-blue) 12%, transparent);
}
.brand-mark,
.brand-fallback {
  width: 4.4rem;
  height: 3.1rem;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 12px;
}
.brand-fallback {
  display: grid;
  place-items: center;
  padding: 0.2rem 0.35rem;
  background: color-mix(in srgb, var(--neu-blue) 8%, transparent);
}
.brand-fallback :deep(.emblem) {
  width: 100%;
  height: auto;
}
.brand-name {
  display: block;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.brand-meta {
  display: block;
  margin-top: 0.1rem;
  font-size: 0.72rem;
  color: var(--color-muted);
}
.actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.45rem;
  margin: 1rem 0 1.15rem;
}
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  min-height: 4.1rem;
  padding: 0.55rem 0.3rem;
  border: 1px solid color-mix(in srgb, var(--neu-blue) 14%, transparent);
  border-radius: 14px;
  background: transparent;
  color: var(--color-ink);
  font-size: 0.68rem;
  font-weight: 650;
  text-decoration: none;
}
.action svg {
  color: var(--neu-blue);
}
.menu-label {
  margin: 0 0 0.35rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
}
.menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu-block + .menu-block {
  border-top: 1px solid color-mix(in srgb, var(--neu-blue) 10%, transparent);
}
.menu-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.95rem 0.1rem;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-align: left;
  text-decoration: none;
}
.menu-row.is-current,
.menu-link.is-current {
  color: var(--neu-blue);
}
.chevron {
  color: var(--color-muted);
  transition: transform 0.2s ease;
}
.menu-row.is-open .chevron {
  transform: rotate(180deg);
  color: var(--neu-blue);
}
.menu-sub {
  display: grid;
  gap: 0.15rem;
  margin: 0 0 0.75rem;
  padding: 0 0 0.15rem;
  list-style: none;
}
.menu-link {
  display: block;
  padding: 0.55rem 0.15rem 0.55rem 0.15rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-ink-soft);
  text-decoration: none;
}
@media (prefers-reduced-motion: reduce) {
  .chevron {
    transition: none;
  }
}
</style>
