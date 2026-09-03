/** Identifiant YouTube à partir d’une URL watch, youtu.be, shorts ou live. */
export function youtubeIdFromUrl(url) {
  if (!url) return ''
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtu.be')) return u.pathname.replace('/', '').slice(0, 11)
    if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/')[2]?.slice(0, 11) || ''
    if (u.pathname.startsWith('/live/')) return u.pathname.split('/')[2]?.slice(0, 11) || ''
    if (u.searchParams.get('v')) return u.searchParams.get('v').slice(0, 11)
    return ''
  } catch {
    return ''
  }
}

export function youtubeEmbedUrl(id, { autoplay = false, origin = '' } = {}) {
  if (!id) return ''
  const params = new URLSearchParams({
    rel: '0',
    playsinline: '1',
    enablejsapi: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  if (origin) {
    params.set('origin', origin)
    params.set('widget_referrer', origin)
  }
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}

export function youtubeThumb(id, quality = 'hqdefault') {
  if (!id) return ''
  return `https://i.ytimg.com/vi/${id}/${quality}.jpg`
}

export function youtubeWatchUrl(id) {
  if (!id) return ''
  return `https://www.youtube.com/watch?v=${id}`
}
