import { computed, ref } from 'vue'
import {
  constructionStages,
  consolationVisits,
  documents,
  historyEvents,
  pastorMessages,
  photos,
  reconstruction,
  testimonials,
  visitors,
  youtubeVideos,
} from '@/data'
import { videoCategoryLabel } from '@/data/media'

function hay(...parts) {
  return parts.filter(Boolean).join(' ').toLowerCase()
}

function buildIndex() {
  const items = []

  historyEvents.forEach((e) => {
    items.push({
      id: `hist-${e.id}`,
      title: e.title,
      date: e.displayDate,
      category: 'Événements',
      excerpt: e.summary || e.description,
      to: e.path || '/histoire',
      search: hay(e.title, e.summary, e.description, e.displayDate, ...(e.people || [])),
    })
  })

  constructionStages.forEach((s) => {
    items.push({
      id: `cst-${s.id}`,
      title: s.title,
      date: s.date,
      category: 'Construction',
      excerpt: s.description,
      to: '/construction',
      search: hay(s.title, s.description, s.date, ...(s.people || [])),
    })
  })

  youtubeVideos.forEach((v) => {
    items.push({
      id: v.id,
      title: v.title,
      date: v.displayDate,
      category: 'Vidéos',
      excerpt: videoCategoryLabel(v.category),
      to: `/mediatheque/${v.id}`,
      search: hay(v.title, v.description, v.speaker, v.displayDate, videoCategoryLabel(v.category)),
    })
  })

  photos.filter((p) => p.src).forEach((p) => {
    items.push({
      id: p.id,
      title: p.title,
      date: p.displayDate,
      category: 'Photos',
      excerpt: p.caption || p.event,
      to: '/galerie',
      search: hay(p.title, p.caption, p.context, p.event, p.displayDate),
    })
  })

  documents.forEach((d) => {
    items.push({
      id: d.id,
      title: d.title,
      date: d.date,
      category: 'Documents',
      excerpt: d.description,
      to: `/archives/${d.id}`,
      search: hay(d.title, d.description, d.date),
    })
  })

  pastorMessages.forEach((m) => {
    items.push({
      id: m.id,
      title: m.title || m.event,
      date: m.displayDate,
      category: 'Paroles',
      excerpt: m.quoteOriginal || m.editorialSummary,
      to: `/voix/pasteur/${m.id}`,
      search: hay(m.author, m.event, m.title, m.quoteOriginal, m.editorialSummary, m.displayDate),
    })
  })

  testimonials.forEach((t) => {
    items.push({
      id: t.id,
      title: t.name,
      date: t.date,
      category: 'Témoignages',
      excerpt: t.excerpt,
      to: '/voix/temoignages',
      search: hay(t.name, t.excerpt, t.recit, t.relation, t.date),
    })
  })

  ;[...visitors, ...consolationVisits].forEach((v) => {
    items.push({
      id: v.id,
      title: v.name,
      date: v.date,
      category: 'Visiteurs',
      excerpt: v.motive || v.message || v.role,
      to: '/voix/visiteurs',
      search: hay(v.name, v.role, v.origin, v.motive, v.message, v.date),
    })
  })

  reconstruction.events?.forEach((e) => {
    items.push({
      id: `rec-${e.id}`,
      title: e.title,
      date: e.date,
      category: 'Reconstruction',
      excerpt: e.description,
      to: '/reconstruction',
      search: hay(e.title, e.description, e.date),
    })
  })

  return items
}

const INDEX = buildIndex()

export const searchCategories = [
  { id: 'all', label: 'Toutes' },
  { id: 'Événements', label: 'Événements' },
  { id: 'Construction', label: 'Construction' },
  { id: 'Photos', label: 'Photos' },
  { id: 'Vidéos', label: 'Vidéos' },
  { id: 'Documents', label: 'Documents' },
  { id: 'Paroles', label: 'Paroles' },
  { id: 'Témoignages', label: 'Témoignages' },
  { id: 'Visiteurs', label: 'Visiteurs' },
  { id: 'Reconstruction', label: 'Reconstruction' },
]

export function useGlobalSearch() {
  const query = ref('')
  const category = ref('all')

  const results = computed(() => {
    const q = query.value.trim().toLowerCase()
    return INDEX.filter((item) => {
      const catOk = category.value === 'all' || item.category === category.value
      if (!catOk) return false
      if (!q) return true
      return item.search.includes(q)
    })
  })

  const grouped = computed(() => {
    const map = new Map()
    results.value.forEach((item) => {
      if (!map.has(item.category)) map.set(item.category, [])
      map.get(item.category).push(item)
    })
    return [...map.entries()].map(([label, items]) => ({ label, items }))
  })

  return { query, category, results, grouped, total: computed(() => results.value.length) }
}
