import { computed, ref } from 'vue'
import { memoryBookSeed } from '@/data'

const STORAGE_KEY = 'temple-moriah-memory-book'

function loadEntries() {
  if (typeof localStorage === 'undefined') return [...memoryBookSeed]
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return [...memoryBookSeed]
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : [...memoryBookSeed]
  } catch {
    return [...memoryBookSeed]
  }
}

const entries = ref(loadEntries())

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.value))
}

export function useMemoryBook() {
  const published = computed(() =>
    entries.value.filter((e) => e.status === 'published' || e.status === 'pending_moderation'),
  )

  function addEntry(payload) {
    const entry = {
      id: `mem-${Date.now()}`,
      name: payload.name.trim(),
      place: payload.place.trim(),
      message: payload.message.trim(),
      souvenir: payload.souvenir?.trim() || '',
      photo: payload.photo || null,
      date: new Date().toISOString(),
      status: 'pending_moderation',
    }
    entries.value = [entry, ...entries.value]
    persist()
    return entry
  }

  return {
    entries,
    published,
    addEntry,
  }
}
