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
      <p v-if="period" class="text-meta">{{ period }}</p>
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
  padding: 0.2rem 1.1rem 0.55rem;
}
.page-hero-mobile :deep(p) {
  font-size: 0.88rem;
}
.page-hero-desktop {
  max-width: 64rem;
  margin: 0 auto;
  padding: 8rem 1.25rem 2.5rem;
}
</style>
