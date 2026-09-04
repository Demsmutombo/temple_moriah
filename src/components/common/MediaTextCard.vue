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
const canExpand = computed(() => !props.to && Boolean(full.value) && full.value.length > 110)
</script>

<template>
  <article class="mtc">
    <div class="mtc-media" aria-hidden="!image">
      <img v-if="image" :src="image" :alt="imageAlt || title" loading="lazy" />
      <span v-else class="mtc-ph">{{ (title || 'A').charAt(0) }}</span>
    </div>
    <div class="mtc-copy">
      <p v-if="kicker || kind" class="text-meta">{{ kicker || kind }}</p>
      <h3>{{ title }}</h3>
      <p v-if="date" class="text-caption">{{ date }}</p>
      <p class="mtc-text" :class="{ 'is-open': open }">{{ open ? full : preview }}</p>
      <RouterLink v-if="to" :to="to" class="mtc-action">{{ action }}</RouterLink>
      <button v-else-if="canExpand" type="button" class="mtc-action" @click="open = !open">
        {{ open ? 'Réduire' : action }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.mtc {
  display: grid;
  gap: 0.85rem;
  padding: 0.85rem;
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
  object-fit: cover;
  display: block;
}
.mtc-ph {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 1.6rem;
  color: var(--neu-blue);
}
.mtc-copy {
  min-width: 0;
}
.mtc-copy h3 {
  margin: 0.28rem 0 0.2rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.mtc-text {
  margin: 0.45rem 0 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--color-ink-soft);
  overflow-wrap: anywhere;
}
.mtc-text:not(:empty) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
.mtc-text.is-open {
  display: block;
  -webkit-line-clamp: unset;
  overflow: visible;
}
.mtc-action {
  display: inline-flex;
  margin-top: 0.7rem;
  padding: 0.42rem 0.95rem;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
  background: none;
  color: var(--color-ink);
  font-size: 0.75rem;
  font-weight: 650;
  cursor: pointer;
}
@media (min-width: 720px) {
  .mtc {
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.18fr);
    align-items: stretch;
    padding: 1rem;
    gap: 1.1rem;
  }
  .mtc-media {
    min-height: 100%;
    aspect-ratio: auto;
  }
}
@media (min-width: 1024px) {
  .mtc {
    border-radius: 28px;
    padding: 1.15rem;
    box-shadow: var(--neu-raised);
  }
  .mtc-copy h3 {
    font-size: 1.35rem;
  }
  .mtc-text {
    font-size: 0.98rem;
    -webkit-line-clamp: 6;
  }
}
</style>
