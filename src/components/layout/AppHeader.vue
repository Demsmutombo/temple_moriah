<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navItems, site } from '@/data'
import SiteLogo from '@/components/common/SiteLogo.vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const openGroup = ref(null)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

watch(
  () => route.fullPath,
  () => {
    open.value = false
    openGroup.value = null
  },
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header hidden lg:block" :class="{ 'is-scrolled': scrolled }">
    <div class="bar">
      <RouterLink to="/" class="brand" aria-label="Temple Moriah — accueil">
        <SiteLogo size="sm" class="shrink-0 logo-nav" />
        <span class="min-w-0">
          <span class="font-display text-base md:text-lg leading-none block">{{ site.name }}</span>
          <span class="text-[11px] text-muted hidden sm:block mt-1">{{ site.church }}</span>
        </span>
      </RouterLink>

      <nav class="hidden xl:flex items-center gap-1" aria-label="Navigation principale">
        <div v-for="item in navItems" :key="item.path" class="relative group">
          <RouterLink
            :to="item.path"
            class="nav-link"
            :class="{ 'is-active': route.path === item.path || (item.children && item.children.some((c) => route.path.startsWith(c.path))) }"
          >
            {{ item.label }}
          </RouterLink>
          <div v-if="item.children" class="submenu">
            <RouterLink v-for="child in item.children" :key="child.path" :to="child.path" class="submenu-link">
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </nav>

      <div class="bar-end">
        <ThemeToggle variant="icon" />
        <button
          type="button"
          class="neu-icon xl:hidden text-sm font-semibold"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          {{ open ? '×' : '☰' }}
        </button>
      </div>
    </div>

    <div v-if="open" id="mobile-nav" class="mobile">
      <nav class="space-y-3" aria-label="Navigation mobile">
        <div v-for="item in navItems" :key="item.path">
          <div class="flex items-center justify-between">
            <RouterLink :to="item.path" class="font-display text-xl">{{ item.label }}</RouterLink>
            <button
              v-if="item.children"
              type="button"
              class="neu-icon !w-8 !h-8 text-sm"
              :aria-expanded="openGroup === item.path"
              @click="openGroup = openGroup === item.path ? null : item.path"
            >
              {{ openGroup === item.path ? '–' : '+' }}
            </button>
          </div>
          <div v-if="item.children && openGroup === item.path" class="mt-2 pl-2 space-y-2">
            <RouterLink v-for="child in item.children" :key="child.path" :to="child.path" class="block text-ink-soft text-sm">
              {{ child.label }}
            </RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  right: 0.75rem;
  z-index: 50;
}
.bar {
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4.5rem;
  padding: 0.45rem 1rem 0.45rem 0.75rem;
  background: var(--neu-bg);
  border-radius: 999px;
  box-shadow: var(--neu-raised);
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.95rem;
  min-width: 0;
  padding-left: 0.1rem;
}
.brand:hover :deep(.site-logo),
.brand:focus-visible :deep(.site-logo) {
  transform: scale(1.12) translateY(-2px);
  filter: drop-shadow(0 10px 20px rgba(74, 144, 226, 0.38));
}
@media (prefers-reduced-motion: reduce) {
  .brand:hover :deep(.site-logo),
  .brand:focus-visible :deep(.site-logo) {
    transform: none;
    filter: none;
  }
}
.nav-link {
  display: inline-flex;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-ink-soft);
}
.nav-link.is-active,
.nav-link:hover {
  color: var(--neu-blue);
  box-shadow: var(--neu-inset);
}
.submenu {
  display: none;
  position: absolute;
  top: calc(100% + 0.6rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 240px;
  padding: 0.7rem;
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-raised);
}
.group:hover .submenu,
.group:focus-within .submenu {
  display: block;
}
.submenu-link {
  display: block;
  padding: 0.55rem 0.8rem;
  border-radius: 14px;
  font-size: 0.85rem;
  font-weight: 500;
}
.submenu-link:hover,
.submenu-link.router-link-active {
  color: var(--neu-blue);
  box-shadow: var(--neu-inset);
}
.bar-end {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
}
.mobile {
  max-width: 80rem;
  margin: 0.75rem auto 0;
  padding: 1.25rem;
  background: var(--neu-bg);
  border-radius: 28px;
  box-shadow: var(--neu-raised);
}
</style>
