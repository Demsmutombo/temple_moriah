<script setup>
import { usePwa } from '@/composables/usePwa'

const { showBanner, canInstall, showIosHint, install, dismiss } = usePwa()

async function onInstall() {
  await install()
}
</script>

<template>
  <div v-if="showBanner" class="install-banner lg:hidden">
    <img src="/icons/apple-touch-icon.png" width="44" height="44" alt="" class="install-icon" />
    <div class="min-w-0 flex-1">
      <p class="install-title">Temple Moriah</p>
      <p v-if="canInstall" class="install-text">Installer l’application sur l’écran d’accueil</p>
      <p v-else-if="showIosHint" class="install-text">
        Partager <span aria-hidden="true">↑</span> puis « Sur l’écran d’accueil »
      </p>
    </div>
    <button v-if="canInstall" type="button" class="neu-btn-primary !px-3.5 !py-2 !text-xs" @click="onInstall">
      Installer
    </button>
    <button type="button" class="install-close" aria-label="Fermer" @click="dismiss">×</button>
  </div>
</template>

<style scoped>
.install-banner {
  position: fixed;
  left: 0.75rem;
  right: 0.75rem;
  bottom: calc(5.35rem + env(safe-area-inset-bottom, 0px));
  z-index: 55;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 0.75rem;
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-raised);
}
.install-icon {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.75rem;
  object-fit: cover;
  flex-shrink: 0;
}
.install-title {
  margin: 0;
  font-weight: 700;
  font-size: 0.88rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.install-text {
  margin: 0.15rem 0 0;
  font-size: 0.72rem;
  line-height: 1.35;
  color: var(--color-ink-soft);
}
.install-close {
  flex-shrink: 0;
  width: 1.8rem;
  height: 1.8rem;
  border: 0;
  background: none;
  color: var(--color-muted);
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
}
</style>
