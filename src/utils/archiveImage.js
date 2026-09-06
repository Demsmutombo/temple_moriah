import { photos } from '@/data/media'

export function photoById(id) {
  if (!id) return null
  return photos.find((p) => p.id === id) || null
}

export function photoSrc(id) {
  return photoById(id)?.src || null
}

export function imageForEvent(eventId) {
  if (!eventId) return photoSrc('ph-dedicace-vue')
  if (eventId.includes('incendie')) return photoSrc('ph-facade-apres')
  if (eventId.includes('culte')) return photoSrc('ph-culte-ciel-ouvert')
  if (eventId.includes('construction')) return photoSrc('ph-construction-1') || photoSrc('ph-facade-avant')
  if (eventId.includes('dedicace')) return photoSrc('ph-dedicace-vue')
  return photoSrc('ph-dedicace-vue')
}
