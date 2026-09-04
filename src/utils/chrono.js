/** Clé de tri : date connue, ou milieu de la période si seul l’année / le mois est établi. */
export function dateKey(value) {
  if (!value) return ''
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  if (/^\d{4}-\d{2}$/.test(s)) return `${s}-15`
  if (/^\d{4}$/.test(s)) return `${s}-07-01`
  return s
}

export function byChrono(a, b, getDate = (item) => item.date || item.sortDate) {
  const ka = dateKey(getDate(a)) || '9999-12-31'
  const kb = dateKey(getDate(b)) || '9999-12-31'
  if (ka !== kb) return ka.localeCompare(kb)
  const ta = String(a.title || a.name || a.id || '')
  const tb = String(b.title || b.name || b.id || '')
  return ta.localeCompare(tb, 'fr')
}

export function sortChrono(list, getDate) {
  return list.slice().sort((a, b) => byChrono(a, b, getDate))
}
