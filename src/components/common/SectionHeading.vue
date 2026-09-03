<script setup>
import ScrollReveal from '@/components/common/ScrollReveal.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <ScrollReveal class="mb-4 lg:mb-14" :class="align === 'center' ? 'text-center' : ''">
    <p v-if="eyebrow" class="text-meta mb-3">{{ eyebrow }}</p>
    <h2 class="font-display text-xl lg:text-4xl text-ink">{{ title }}</h2>
    <p v-if="subtitle" class="mt-4 max-w-2xl text-ink-soft" :class="align === 'center' ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
    <div class="rule mt-5 hidden lg:block" :class="align === 'center' ? 'mx-auto' : ''" />
  </ScrollReveal>
</template>
