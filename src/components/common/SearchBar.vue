<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Rechercher dans les archives' },
  label: { type: String, default: 'Recherche' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="block">
    <span class="sr-only">{{ label }}</span>
    <span class="search-wrap">
      <span class="search-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8" />
          <path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </span>
      <input
        :value="modelValue"
        type="search"
        :placeholder="placeholder"
        class="search-input"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </span>
  </label>
</template>

<style scoped>
.search-wrap {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-inset);
  padding: 0.12rem 1.05rem;
}
.search-input {
  width: 100%;
  background: transparent;
  border: 0;
  padding: 0.78rem 0;
  font-size: 0.9rem;
  color: var(--color-ink);
}
.search-input::placeholder {
  color: var(--color-muted);
}
.search-input:focus {
  outline: none;
}
.search-icon {
  color: var(--neu-blue);
  font-size: 1.1rem;
}
@media (min-width: 1024px) {
  .search-wrap {
    padding: 0.15rem 1.1rem;
  }
  .search-input {
    padding: 0.95rem 0;
    font-size: 0.95rem;
  }
}
</style>
