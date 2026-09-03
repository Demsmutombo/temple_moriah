import { useRoute } from 'vue-router'
import { watch } from 'vue'

const DEFAULT_TITLE = 'Temple Moriah — Histoire, mémoire et archives'
const DEFAULT_DESC =
  'Plateforme documentaire consacrée à l’histoire, à la mémoire et à la reconstruction du Temple Moriah de Shekinah Tabernacle, à Kinshasa.'

function setMeta(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setOg(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo() {
  const route = useRoute()

  watch(
    () => route.meta,
    (meta) => {
      const title = meta.title ? `${meta.title} — Temple Moriah` : DEFAULT_TITLE
      const description = meta.description || DEFAULT_DESC
      document.title = title
      setMeta('description', description)
      setOg('og:title', title)
      setOg('og:description', description)
    },
    { immediate: true },
  )
}
