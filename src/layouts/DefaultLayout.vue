<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MobileTopBar from '@/components/layout/MobileTopBar.vue'
import MobileTabBar from '@/components/layout/MobileTabBar.vue'
import MobileMoreSheet from '@/components/layout/MobileMoreSheet.vue'
import { useSeo } from '@/composables/useSeo'
import { useMobileNav } from '@/composables/useMobileNav'

useSeo()
const { isHome } = useMobileNav()
</script>

<template>
  <div class="app-shell bg-ivory text-ink">
    <a href="#contenu" class="skip-link">Aller au contenu</a>
    <MobileTopBar />
    <AppHeader class="hidden lg:block" />
    <main id="contenu" class="flex-1 app-main" :class="{ 'is-home': isHome }">
      <slot />
    </main>
    <AppFooter class="hidden lg:block" />
    <MobileTabBar />
    <MobileMoreSheet />
  </div>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: 1rem;
  top: -4rem;
  background: var(--neu-blue);
  color: #fff;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  z-index: 100;
  font-family: var(--font-ui);
}
.skip-link:focus {
  top: 1rem;
}
.app-shell {
  min-height: 100dvh;
}
.app-main {
  padding-top: calc(3.7rem + env(safe-area-inset-top, 0px));
  padding-bottom: calc(5.6rem + env(safe-area-inset-bottom, 0px));
  min-width: 0;
}
.app-main.is-home {
  padding-top: 0;
}
@media (max-width: 1023px) {
  .app-shell {
    height: 100dvh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .app-main {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
    touch-action: pan-y;
  }
}
@media (min-width: 1024px) {
  .app-main,
  .app-main.is-home {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
