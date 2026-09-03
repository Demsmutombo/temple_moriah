<script setup>
defineProps({
  event: { type: Object, required: true },
  active: { type: Boolean, default: false },
})
defineEmits(['select'])
</script>

<template>
  <li>
    <button
      type="button"
      class="item"
      :class="{ 'is-active': active }"
      :aria-current="active ? 'true' : undefined"
      @click="$emit('select', event.id)"
    >
      <span class="dot" aria-hidden="true" />
      <span class="text-meta text-gold">{{ event.displayDate }}</span>
      <span class="font-display text-xl md:text-2xl block mt-1">{{ event.title }}</span>
    </button>
  </li>
</template>

<style scoped>
.item {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.95rem 1rem 0.95rem 1.15rem;
  color: var(--color-muted);
  background: var(--neu-bg);
  border-radius: 20px;
  box-shadow: var(--neu-raised-sm);
  margin-bottom: 0.75rem;
}
.item.is-active,
.item:hover {
  color: var(--color-ink);
  box-shadow: var(--neu-inset);
}
.dot {
  display: none;
}
</style>
