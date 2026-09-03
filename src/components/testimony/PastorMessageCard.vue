<script setup>
defineProps({
  message: { type: Object, required: true },
})
</script>

<template>
  <article class="pm-card">
    <RouterLink :to="`/voix/pasteur/${message.id}`" class="pm-link">
      <div class="portrait">
        <img v-if="message.photo" :src="message.photo" :alt="message.author" class="w-full h-full object-cover rounded-full" />
        <span v-else class="text-meta">{{ (message.author || 'P').charAt(0) }}</span>
      </div>
      <div class="pm-body">
        <h3 class="pm-title">{{ message.author }}</h3>
        <p class="text-caption">{{ message.event }} · {{ message.displayDate }}</p>
        <p v-if="message.quoteOriginal" class="pm-quote">
          « {{ message.quoteOriginal }} »
        </p>
        <p v-else class="pm-quote">{{ message.title || message.editorialSummary }}</p>
        <p class="text-meta mt-2 hidden lg:block">Lire le message →</p>
      </div>
      <span class="pm-go lg:hidden" aria-hidden="true">›</span>
    </RouterLink>
  </article>
</template>

<style scoped>
.pm-card {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  border-radius: 18px;
  padding: 0.85rem 0.9rem;
}
.pm-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.portrait {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
  display: grid;
  place-items: center;
}
.pm-body {
  min-width: 0;
  flex: 1;
}
.pm-title {
  font-family: var(--font-display);
  font-size: 1.02rem;
  line-height: 1.25;
}
.pm-quote {
  margin-top: 0.25rem;
  font-size: 0.82rem;
  color: var(--color-ink-soft);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pm-go {
  color: var(--color-muted);
  font-size: 1.35rem;
  line-height: 1;
}
@media (min-width: 1024px) {
  .pm-card {
    border-radius: 28px;
    padding: 1.35rem;
    box-shadow: var(--neu-raised);
  }
  .pm-link {
    display: block;
  }
  .portrait {
    width: 88px;
    height: 88px;
  }
  .pm-title {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
  .pm-quote {
    margin-top: 1rem;
    font-size: 1rem;
    font-style: italic;
    -webkit-line-clamp: 6;
  }
}
</style>
