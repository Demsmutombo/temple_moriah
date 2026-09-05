<script setup>
import { computed } from 'vue'
import { usePwa } from '@/composables/usePwa'
import { usePageLoader } from '@/composables/usePageLoader'

const { showBanner, canInstall, showIosHint, install, dismiss } = usePwa()
const { phase } = usePageLoader()

const visible = computed(() => showBanner.value && phase.value === 'ready')

async function onInstall() {
  await install()
}
</script>

<template>
  <aside v-if="visible" class="install" role="dialog" aria-labelledby="install-title" aria-describedby="install-text">
    <button type="button" class="install-close" aria-label="Fermer" @click="dismiss">×</button>
    <div class="install-row">
      <img src="/screempage.jfif" width="64" height="64" alt="" class="install-icon" />
      <div class="install-copy">
        <p id="install-title" class="install-title">Installer Temple Moriah</p>
        <p id="install-text" class="install-text">
          <template v-if="canInstall">Gardez l’histoire, les archives et les captations sur l’écran d’accueil.</template>
          <template v-else-if="showIosHint">
            Touchez Partager <span aria-hidden="true">↑</span>, puis « Sur l’écran d’accueil ».
          </template>
        </p>
      </div>
    </div>
    <div class="install-actions">
      <button v-if="canInstall" type="button" class="neu-btn-primary install-cta" @click="onInstall">
        Installer
      </button>
      <button type="button" class="install-later" @click="dismiss">Plus tard</button>
    </div>
  </aside>
</template>

<style scoped>
.install {
  position: fixed;
  left: 0.85rem;
  right: 0.85rem;
  bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
  z-index: 70;
  display: grid;
  gap: 0.95rem;
  padding: 1rem 1rem 1.05rem;
  background: var(--neu-bg);
  border-radius: 26px;
  box-shadow: var(--neu-raised), 0 0 0 2px color-mix(in srgb, var(--neu-blue) 28%, transparent);
  animation: install-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.install-close {
  position: absolute;
  top: 0.55rem;
  right: 0.55rem;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  color: var(--color-ink);
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
}
.install-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding-right: 1.6rem;
}
.install-icon {
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: var(--neu-inset);
}
.install-copy {
  min-width: 0;
}
.install-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--neu-blue);
}
.install-text {
  margin: 0.28rem 0 0;
  font-size: 0.86rem;
  line-height: 1.4;
  color: var(--color-ink);
}
.install-actions {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.install-cta {
  flex: 1;
  min-height: 2.75rem;
  padding-inline: 1.2rem;
  font-size: 0.95rem;
  animation: install-pulse 2.2s ease-in-out infinite;
}
.install-later {
  flex-shrink: 0;
  border: 0;
  background: none;
  color: var(--color-ink-soft);
  font-size: 0.82rem;
  font-weight: 650;
  padding: 0.55rem 0.35rem;
  cursor: pointer;
}
@keyframes install-in {
  from {
    opacity: 0;
    transform: translateY(1.1rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes install-pulse {
  0%,
  100% {
    box-shadow: var(--neu-btn-primary-shadow);
  }
  50% {
    box-shadow: var(--neu-btn-primary-shadow), 0 0 0 6px color-mix(in srgb, var(--neu-blue) 22%, transparent);
  }
}
@media (min-width: 1024px) {
  .install {
    left: auto;
    right: 1.5rem;
    bottom: 1.5rem;
    width: min(26rem, calc(100vw - 3rem));
  }
}
@media (prefers-reduced-motion: reduce) {
  .install,
  .install-cta {
    animation: none;
  }
}
</style>
