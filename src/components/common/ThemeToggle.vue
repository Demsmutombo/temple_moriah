<script setup>
import { useTheme } from '@/composables/useTheme'

defineProps({
  variant: { type: String, default: 'round' },
})

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    :class="variant === 'round' ? 'theme-round' : 'neu-icon theme-icon'"
    :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <svg v-if="isDark" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.7" />
      <path
        d="M12 3.4v1.6M12 19v1.6M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3.4 12h1.6M19 12h1.6M4.9 19.1 6 18M18 6l1.1-1.1"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
      />
    </svg>
    <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M15.2 4.4A8.2 8.2 0 1 0 19.6 15 6.4 6.4 0 0 1 15.2 4.4Z"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<style scoped>
.theme-round {
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
  cursor: pointer;
}
.theme-round:active {
  box-shadow: var(--neu-inset);
}
.theme-icon {
  border: 0;
  padding: 0;
  cursor: pointer;
}
</style>
