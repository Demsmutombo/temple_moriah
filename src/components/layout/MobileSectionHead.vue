<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div class="msec-head">
    <h2>{{ title }}</h2>
    <div class="msec-action">
      <slot>
        <span class="msec-gear" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7" />
            <path d="M12 3.6v1.8M12 18.6v1.8M3.6 12h1.8M18.6 12h1.8M6.1 6.1l1.3 1.3M16.6 16.6l1.3 1.3M17.9 6.1l-1.3 1.3M7.4 16.6l-1.3 1.3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
          </svg>
        </span>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.msec-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.15rem 0.2rem 0.65rem;
}
.msec-head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.msec-action {
  display: flex;
  align-items: center;
  color: var(--color-muted);
}
.msec-gear {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  color: var(--color-muted);
}
</style>
