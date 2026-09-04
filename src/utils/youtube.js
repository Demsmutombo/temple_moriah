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

/** Lecteur fermé : une seule vidéo, sans file d’attente ni suggestions. */
export function youtubePlayerVars(id, { autoplay = false, origin = '', start = 0, end = 0 } = {}) {
  const vars = {
    autoplay: autoplay ? 1 : 0,
    rel: 0,
    playsinline: 1,
    modestbranding: 1,
    iv_load_policy: 3,
    cc_load_policy: 0,
    controls: 0,
    fs: 0,
    disablekb: 1,
    playlist: id,
    loop: 0,
    showinfo: 0,
    autohide: 1,
    enablejsapi: 1,
  }
  if (origin) {
    vars.origin = origin
    vars.widget_referrer = origin
  }
  if (start) vars.start = start
  if (end) vars.end = end
  return vars
}

export function youtubeEmbedUrl(id, options = {}) {
  if (!id) return ''
  const origin = options.origin || (typeof window !== 'undefined' ? window.location.origin : '')
  const vars = youtubePlayerVars(id, { ...options, origin })
  const params = new URLSearchParams()
  Object.entries(vars).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return
    params.set(key, String(value))
  })
  params.set('enablejsapi', '1')
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

let apiPromise

export function loadYoutubeApi() {
  if (typeof window === 'undefined') return Promise.reject(new Error('window'))
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === 'function') previous()
      resolve(window.YT)
    }
    if (!document.querySelector('script[data-tm-yt-api]')) {
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.dataset.tmYtApi = '1'
      document.head.appendChild(script)
    }
    if (window.YT?.Player) resolve(window.YT)
  })
  return apiPromise
}

export function formatTimecode(seconds) {
  const total = Math.max(0, Math.floor(seconds || 0))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
