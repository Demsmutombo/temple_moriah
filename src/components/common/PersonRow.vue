<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  initial: { type: String, default: '' },
  photo: { type: String, default: '' },
  to: { type: [String, Object], default: '' },
  action: { type: String, default: 'Ouvrir' },
})
</script>

<template>
  <component
    :is="to ? RouterLink : 'article'"
    :to="to || undefined"
    class="person-row"
  >
    <span class="avatar" aria-hidden="true">
      <img v-if="photo" :src="photo" :alt="title" />
      <span v-else>{{ (initial || title).charAt(0) }}</span>
    </span>
    <span class="body">
      <span class="name">{{ title }}</span>
      <span v-if="subtitle" class="sub">{{ subtitle }}</span>
    </span>
    <span v-if="action" class="follow">{{ action }}</span>
    <span class="row-x" aria-hidden="true">×</span>
  </component>
</template>

<style scoped>
.person-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.85rem 0.4rem;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid color-mix(in srgb, var(--neu-blue) 10%, transparent);
}
.person-row:last-child {
  border-bottom: 0;
}
.avatar {
  display: grid;
  place-items: center;
  width: 3.15rem;
  height: 3.15rem;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.row-x {
  flex-shrink: 0;
  width: 1.1rem;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1;
  color: var(--color-muted);
}
@media (min-width: 1024px) {
  .row-x {
    display: none;
  }
}
</style>
