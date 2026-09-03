<script setup>
import { onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navItems, site } from '@/data'
import SiteLogo from '@/components/common/SiteLogo.vue'
import PersonRow from '@/components/common/PersonRow.vue'
import { useMobileNav } from '@/composables/useMobileNav'

const route = useRoute()
const { moreOpen, closeMore, sharePage, copyLink } = useMobileNav()
const copied = ref(false)

watch(
  () => route.fullPath,
  () => closeMore(),
)

watch(moreOpen, (open) => {
  const main = document.getElementById('contenu')
  if (main) main.style.overflowY = open ? 'hidden' : ''
  if (!open) copied.value = false
})

onUnmounted(() => {
  const main = document.getElementById('contenu')
  if (main) main.style.overflowY = ''
})

async function onCopy() {
  const ok = await copyLink()
  copied.value = ok
}
</script>

<template>
  <Teleport to="body">
    <div v-if="moreOpen" class="sheet-root lg:hidden">
      <button type="button" class="sheet-backdrop" aria-label="Fermer le menu" @click="closeMore" />
      <section class="sheet" role="dialog" aria-modal="true" aria-labelledby="more-title">
        <div class="sheet-handle" aria-hidden="true" />
        <h2 id="more-title" class="sheet-title">Partager</h2>

        <RouterLink to="/" class="mini-card" @click="closeMore">
          <span class="mini-avatar">
            <SiteLogo size="sm" />
          </span>
          <span class="min-w-0">
            <span class="block font-display text-base leading-tight">{{ site.name }}</span>
            <span class="text-caption">{{ site.church }} · {{ site.city }}</span>
          </span>
          <span class="mini-action">Accueil</span>
        </RouterLink>

        <div class="mark-card" aria-hidden="true">
          <SiteLogo size="lg" />
        </div>

        <div class="sheet-actions">
          <button type="button" class="sheet-fab" @click="sharePage">
            <span class="sheet-fab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <circle cx="18" cy="5" r="2.1" stroke="currentColor" stroke-width="1.7" />
                <circle cx="6" cy="12" r="2.1" stroke="currentColor" stroke-width="1.7" />
                <circle cx="18" cy="19" r="2.1" stroke="currentColor" stroke-width="1.7" />
                <path d="M8 12.8 16 18.2M16 5.8 8 11.2" stroke="currentColor" stroke-width="1.7" />
              </svg>
            </span>
            <span>Partager</span>
          </button>
          <button type="button" class="sheet-fab" :class="{ 'is-active': copied }" @click="onCopy">
            <span class="sheet-fab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.7" />
                <path d="M6 16V6.8A1.8 1.8 0 0 1 7.8 5H16" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
              </svg>
            </span>
            <span>{{ copied ? 'Copié' : 'Copier le lien' }}</span>
          </button>
          <RouterLink to="/livre-de-memoire" class="sheet-fab is-active" @click="closeMore">
            <span class="sheet-fab-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M5 5.5h9.5A3.5 3.5 0 0 1 18 9v10.5H8.5A3.5 3.5 0 0 1 5 16V5.5Z" stroke="currentColor" stroke-width="1.7" />
              </svg>
            </span>
            <span>Mémoire</span>
          </RouterLink>
        </div>

        <ul class="sheet-list">
          <li class="sheet-list-label">Parcourir</li>
          <li v-for="item in navItems" :key="item.path">
            <PersonRow
              :title="item.label"
              :subtitle="item.children ? `${item.children.length} sections` : site.church"
              :to="item.path"
              action="Ouvrir"
            />
            <ul v-if="item.children" class="sheet-children">
              <li v-for="child in item.children" :key="child.path">
                <RouterLink :to="child.path" class="sheet-child" @click="closeMore">
                  {{ child.label }}
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
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
  background: var(--neu-overlay);
  border: 0;
}
.sheet {
  position: relative;
  max-height: min(90dvh, 760px);
  overflow: auto;
  padding: 0.65rem 1.1rem calc(1.15rem + env(safe-area-inset-bottom, 0px));
  background: var(--neu-bg);
  border-radius: 32px 32px 0 0;
  box-shadow: var(--neu-raised);
}
.sheet-handle {
  width: 42px;
  height: 5px;
  margin: 0.1rem auto 0.75rem;
  border-radius: 999px;
  background: var(--neu-dark);
}
.sheet-title {
  text-align: center;
  font-family: var(--font-display);
  font-size: 1.15rem;
  margin-bottom: 0.95rem;
}
.mini-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.8rem;
  margin-bottom: 0.95rem;
  border-radius: 18px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
}
.mini-avatar {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  flex-shrink: 0;
}
.mini-avatar :deep(.site-logo) {
  width: 2.2rem;
  height: 1.65rem;
}
.mini-action {
  margin-left: auto;
  font-size: 0.72rem;
  font-weight: 650;
  color: var(--neu-blue);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  box-shadow: var(--neu-raised-sm);
  flex-shrink: 0;
}
.mark-card {
  display: grid;
  place-items: center;
  width: min(100%, 220px);
  aspect-ratio: 1;
  margin: 0 auto 1.1rem;
  border-radius: 28px;
  background: var(--neu-chip-on);
  box-shadow: var(--neu-raised);
}
.mark-card :deep(.site-logo--lg) {
  width: 140px;
  height: 102px;
}
.sheet-list {
  margin-top: 0.35rem;
}
.sheet-list-label {
  font-family: var(--font-display);
  font-size: 1.02rem;
  font-weight: 700;
  padding: 0.35rem 0.2rem 0.55rem;
  list-style: none;
}
.sheet-children {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.45rem;
  overflow-x: auto;
  padding: 0 0.2rem 0.45rem 3.7rem;
  scrollbar-width: none;
}
.sheet-children::-webkit-scrollbar {
  display: none;
}
.sheet-child {
  flex: 0 0 auto;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-ink-soft);
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  box-shadow: var(--neu-raised-sm);
}
.sheet-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.sheet-fab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.68rem;
  font-weight: 650;
  color: var(--color-ink-soft);
  background: none;
  border: 0;
  padding: 0;
}
.sheet-fab-icon {
  display: grid;
  place-items: center;
  width: 3.15rem;
  height: 3.15rem;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  color: var(--neu-blue);
}
.sheet-fab.is-active,
.sheet-fab.is-active .sheet-fab-icon {
  color: var(--neu-blue);
}
.sheet-fab.is-active .sheet-fab-icon {
  color: #fff;
  background: linear-gradient(180deg, #5aa0f0 0%, #4a90e2 100%);
  box-shadow: var(--neu-fab-shadow);
}
</style>
