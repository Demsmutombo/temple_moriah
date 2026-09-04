<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: 'all' },
  items: { type: Array, required: true },
  allLabel: { type: String, default: 'Tout' },
})
const emit = defineEmits(['update:modelValue'])

const compact = computed(() => props.items.length > 4)
const currentLabel = computed(() => {
  if (props.modelValue === 'all') return props.allLabel
  return props.items.find((i) => i.id === props.modelValue)?.label || props.allLabel
})
</script>

<template>
  <div>
    <label v-if="compact" class="filter-select lg:hidden">
      <span class="sr-only">{{ allLabel }}</span>
      <select :value="modelValue" @change="emit('update:modelValue', $event.target.value)">
        <option value="all">{{ allLabel }}</option>
        <option v-for="item in items" :key="item.id" :value="item.id">{{ item.label }}</option>
      </select>
    </label>

    <div class="filter-pills" :class="{ 'lg-only': compact }" role="tablist" :aria-label="allLabel">
      <button
        type="button"
        class="neu-chip"
        :class="{ 'is-active': modelValue === 'all' }"
        @click="emit('update:modelValue', 'all')"
      >
        {{ allLabel }}
      </button>
      <button
        v-for="item in items"
        :key="item.id"
        type="button"
        class="neu-chip"
        :class="{ 'is-active': modelValue === item.id }"
        @click="emit('update:modelValue', item.id)"
      >
        {{ item.label }}
      </button>
    </div>
    <p v-if="compact" class="filter-now lg:hidden">{{ currentLabel }}</p>
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
.filter-select select {
  width: 100%;
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 0.75rem 1.1rem;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  color: inherit;
  font-weight: 650;
}
.filter-now {
  display: none;
}
.filter-pills.lg-only {
  display: none;
}
@media (min-width: 1024px) {
  .filter-pills,
  .filter-pills.lg-only {
    display: flex;
    flex-wrap: wrap;
    overflow: visible;
  }
}
</style>
