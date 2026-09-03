import { computed, ref } from 'vue'

export function useArchiveFilter(items, { searchKeys = ['title', 'description'] } = {}) {
  const query = ref('')
  const category = ref('all')

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    return items.value.filter((item) => {
      const catOk = category.value === 'all' || item.category === category.value
      if (!catOk) return false
      if (!q) return true
      return searchKeys.some((key) => String(item[key] || '').toLowerCase().includes(q))
    })
  })

  return { query, category, filtered }
}
