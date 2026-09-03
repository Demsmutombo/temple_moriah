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
  <div class="app-shell min-h-dvh flex flex-col bg-ivory text-ink">
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
.app-main {
  padding-top: calc(3.35rem + env(safe-area-inset-top, 0px));
  padding-bottom: calc(5.6rem + env(safe-area-inset-bottom, 0px));
  min-width: 0;
}
.app-main.is-home {
  padding-top: 0;
}
@media (min-width: 1024px) {
  .app-main,
  .app-main.is-home {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
