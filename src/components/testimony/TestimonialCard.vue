<script setup>
defineProps({
  item: { type: Object, required: true },
})
</script>

<template>
  <article class="t-card">
    <span class="row-avatar" aria-hidden="true">{{ (item.name || 'T').charAt(0) }}</span>
    <div class="row-body">
      <h3 class="row-title">{{ item.name }}</h3>
      <p class="text-caption">{{ item.relation || item.categoryLabel || item.date }}</p>
      <p v-if="item.excerpt || item.recit" class="mt-1 text-ink-soft text-sm line-clamp-2 lg:line-clamp-4 lg:mt-3 hidden lg:block">
        {{ item.excerpt || item.recit }}
      </p>
    </div>
    <span class="row-follow lg:hidden">Lire</span>
  </article>
</template>

<style scoped>
.row-follow {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 650;
  color: var(--color-ink);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1.5px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
  background: transparent;
}
.t-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  border-radius: 18px;
  padding: 0.85rem 0.95rem;
}
.row-avatar {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  border-radius: 50%;
  font-weight: 700;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.row-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  line-height: 1.25;
}
.row-body {
  min-width: 0;
  flex: 1;
}
@media (min-width: 1024px) {
  .t-card {
    display: block;
    border-radius: 28px;
    padding: 1.5rem;
    box-shadow: var(--neu-raised);
  }
  .row-avatar {
    display: none;
  }
  .row-title {
    font-size: 1.5rem;
    margin-top: 0.4rem;
  }
}
</style>
