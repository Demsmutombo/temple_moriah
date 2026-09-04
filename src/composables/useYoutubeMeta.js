import { reactive } from 'vue'
import { youtubeThumb, youtubeWatchUrl } from '@/utils/youtube'

const STORAGE_KEY = 'tm-yt-meta'
export const ytMeta = reactive(loadCache())

function loadCache() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function persist() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ytMeta))
  } catch {
    /* ignore */
  }
}

export function displayVideo(video) {
  const meta = video.youtubeId ? ytMeta[video.youtubeId] : null
  return {
    ...video,
    title: video.title || meta?.title || '',
    speaker: video.speaker || '',
    thumbnail: video.thumbnail || meta?.thumbnail || (video.youtubeId ? youtubeThumb(video.youtubeId) : ''),
  }
}

export async function prefetchYoutubeMeta(list) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) return
  const pending = list.filter((v) => v.youtubeId && !ytMeta[v.youtubeId])
  await Promise.all(
    pending.map(async (video) => {
      try {
        const url = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(youtubeWatchUrl(video.youtubeId))}`
        const res = await fetch(url)
        if (!res.ok) throw new Error('oembed')
        const data = await res.json()
        ytMeta[video.youtubeId] = {
          title: data.title || video.title,
          author: data.author_name || '',
          thumbnail: data.thumbnail_url || youtubeThumb(video.youtubeId),
        }
      } catch {
        ytMeta[video.youtubeId] = {
          title: video.title,
          author: '',
          thumbnail: youtubeThumb(video.youtubeId),
        }
      }
    }),
  )
  persist()
}
