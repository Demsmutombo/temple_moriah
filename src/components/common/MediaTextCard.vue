<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  date: { type: String, default: '' },
  excerpt: { type: String, default: '' },
  body: { type: String, default: '' },
  to: { type: String, default: '' },
  action: { type: String, default: 'Lire plus' },
  kind: { type: String, default: '' },
})

const open = ref(false)
const full = computed(() => props.body || props.excerpt)
const preview = computed(() => props.excerpt || props.body || '')
const canExpand = computed(() => !props.to && Boolean(full.value) && full.value.length > 140)
const shown = computed(() => (open.value ? full.value : preview.value))
</script>

<template>
  <article class="mtc" :class="{ 'has-media': Boolean(image) }">
    <div v-if="image" class="mtc-media">
      <img :src="image" :alt="imageAlt || title" loading="lazy" />
    </div>
    <div class="mtc-copy">
      <p v-if="kicker || kind" class="text-meta">{{ kicker || kind }}</p>
      <h3>{{ title }}</h3>
      <p v-if="date" class="text-caption">{{ date }}</p>
      <p class="mtc-text" :class="{ 'is-open': open || !canExpand }">{{ shown }}</p>
      <RouterLink v-if="to" :to="to" class="mtc-action">{{ action }}</RouterLink>
      <button v-else-if="canExpand" type="button" class="mtc-action" :aria-expanded="open" @click="open = !open">
        {{ open ? 'Réduire' : action }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.mtc {
  display: grid;
  gap: 0.95rem;
  padding: 0.9rem;
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-raised-sm);
}
.mtc-media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 16px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.mtc-media img {
  width: 100%;
  height: 100%;
  max-width: none;
  max-height: none;
  object-fit: cover;
  display: block;
}
.mtc-copy {
  min-width: 0;
}
.mtc-copy h3 {
  margin: 0.28rem 0 0.2rem;
  font-family: var(--font-display);
  font-size: 1.18rem;
  font-weight: 700;
  line-height: 1.28;
  overflow-wrap: anywhere;
}
.mtc-text {
  margin: 0.5rem 0 0;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--color-ink-soft);
  overflow-wrap: anywhere;
  white-space: pre-line;
}
.mtc-text:not(:empty):not(.is-open) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.mtc-text.is-open {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}
.mtc-action {
  display: inline-flex;
  margin-top: 0.85rem;
  padding: 0.48rem 1.05rem;
  border-radius: 999px;
  border: 0;
  background: var(--neu-bg);
  color: var(--neu-blue);
  box-shadow: var(--neu-raised-sm);
  font-size: 0.78rem;
  font-weight: 650;
  cursor: pointer;
}
.mtc-action:active {
  box-shadow: var(--neu-inset);
}
@media (min-width: 720px) {
  .mtc.has-media {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.18fr);
    align-items: stretch;
    padding: 1.05rem;
    gap: 1.15rem;
  }
  .mtc.has-media .mtc-media {
    min-height: 100%;
    aspect-ratio: auto;
  }
}
@media (min-width: 1024px) {
  .mtc {
    border-radius: 28px;
    padding: 1.2rem;
    box-shadow: var(--neu-raised);
  }
  .mtc-copy h3 {
    font-size: 1.45rem;
  }
  .mtc-text {
    font-size: 1.02rem;
  }
}
</style>
