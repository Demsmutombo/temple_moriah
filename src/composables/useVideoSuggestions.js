import { youtubeVideos } from '@/data'

export function suggestedVideos(current, limit = 6) {
  if (!current) return []
  const rest = youtubeVideos.filter((item) => item.id !== current.id)
  const same = rest
    .filter((item) => item.category === current.category)
    .slice()
    .sort((a, b) => (a.seq ?? 50) - (b.seq ?? 50))
  const seq = current.seq ?? 50
  const after = same.filter((item) => (item.seq ?? 50) > seq)
  const before = same.filter((item) => (item.seq ?? 50) <= seq)
  const others = rest.filter((item) => item.category !== current.category)
  return [...after, ...before, ...others].slice(0, limit)
}
