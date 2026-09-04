<script setup>
import ScrollReveal from '@/components/common/ScrollReveal.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  period: { type: String, default: '' },
  tone: { type: String, default: 'light' },
})
</script>

<template>
  <header class="page-hero">
    <div class="page-hero-mobile lg:hidden">
      <p v-if="period || eyebrow" class="text-meta">{{ period || eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="lead">{{ subtitle }}</p>
      <slot />
    </div>

    <div class="page-hero-desktop hidden lg:block">
      <ScrollReveal>
        <div class="neu-card-lg">
          <p v-if="period" class="text-meta mb-4">{{ period }}</p>
          <p v-if="eyebrow" class="text-meta mb-4">{{ eyebrow }}</p>
          <h1 class="font-display text-3xl md:text-5xl lg:text-6xl text-ink max-w-4xl">
            {{ title }}
          </h1>
          <p v-if="subtitle" class="mt-5 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
            {{ subtitle }}
          </p>
          <slot />
        </div>
      </ScrollReveal>
    </div>
  </header>
</template>

<style scoped>
.page-hero-mobile {
  padding: 0.55rem var(--page-gutter) 1rem;
}
.page-hero-mobile h1 {
  margin: 0.35rem 0 0;
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.page-hero-mobile .lead {
  margin: 0.55rem 0 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-ink-soft);
}
.page-hero-desktop {
  max-width: 64rem;
  margin: 0 auto;
  padding: 8rem 1.25rem 2.5rem;
}
</style>
