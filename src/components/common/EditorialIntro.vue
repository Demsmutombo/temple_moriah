<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
})
</script>

<template>
  <div class="intro">
    <p v-if="kicker" class="text-meta">{{ kicker }}</p>
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
    <slot />
  </div>
</template>

<style scoped>
.intro {
  margin-bottom: 1.15rem;
}
.intro h2 {
  margin: 0.35rem 0 0.55rem;
  font-family: var(--font-display);
  font-size: 1.28rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.25;
  overflow-wrap: anywhere;
}
.intro p:not(.text-meta) {
  margin: 0;
  line-height: 1.65;
  color: var(--color-ink-soft);
}
@media (min-width: 1024px) {
  .intro {
    margin-bottom: 1.8rem;
  }
  .intro h2 {
    font-size: 2rem;
  }
  .intro p:not(.text-meta) {
    font-size: 1.05rem;
  }
}
</style>
