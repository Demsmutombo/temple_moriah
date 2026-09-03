<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  initial: { type: String, default: '' },
  action: { type: String, default: 'Lire' },
})

const open = ref(false)
</script>

<template>
  <article class="acc-row">
    <button type="button" class="acc-head" :aria-expanded="open" @click="open = !open">
      <span class="avatar" aria-hidden="true">{{ (initial || title).charAt(0) }}</span>
      <span class="body">
        <span class="name">{{ title }}</span>
        <span v-if="subtitle && !open" class="sub">{{ subtitle }}</span>
      </span>
      <span class="follow">{{ open ? 'Fermer' : action }}</span>
    </button>
    <div v-if="open" class="acc-body">
      <slot>
        <p v-if="subtitle">{{ subtitle }}</p>
      </slot>
    </div>
  </article>
</template>

<style scoped>
.acc-row {
  border-bottom: 1px solid color-mix(in srgb, var(--neu-blue) 10%, transparent);
}
.acc-row:last-child {
  border-bottom: 0;
}
.acc-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.72rem 0.2rem;
  text-align: left;
  background: none;
  border: 0;
  color: inherit;
}
.avatar {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.body {
  min-width: 0;
  flex: 1;
}
.name {
  display: block;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.sub {
  display: block;
  margin-top: 0.12rem;
  font-size: 0.75rem;
  color: var(--color-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.follow {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 650;
  color: var(--color-ink);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
  background: transparent;
}
.acc-body {
  padding: 0 0.2rem 0.95rem 3.9rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-ink-soft);
}
</style>
