<script setup>
defineProps({
  modelValue: { type: String, default: 'all' },
  items: { type: Array, required: true },
  allLabel: { type: String, default: 'Tout' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="filter-pills" role="tablist" :aria-label="allLabel">
    <button
      type="button"
      class="neu-chip"
      :class="{ 'is-active': modelValue === 'all' }"
      @click="$emit('update:modelValue', 'all')"
    >
      {{ allLabel }}
    </button>
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      class="neu-chip"
      :class="{ 'is-active': modelValue === item.id }"
      @click="$emit('update:modelValue', item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<style scoped>
.filter-pills {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.15rem 0.1rem 0.35rem;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.filter-pills::-webkit-scrollbar {
  display: none;
}
.filter-pills > button {
  flex: 0 0 auto;
  white-space: nowrap;
}
@media (min-width: 1024px) {
  .filter-pills {
    flex-wrap: wrap;
    overflow: visible;
  }
}
</style>
