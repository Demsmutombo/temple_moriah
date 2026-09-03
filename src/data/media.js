import { youtubeEmbedUrl, youtubeThumb } from '@/utils/youtube'

const DONATION_ASSETS = 'https://donation.shekinahgospel.org/assets'
const CHURCH_2018 = 'https://shekinahgospel.org/images/church/2018'

/** Ordre d’affichage : visites, consolation, paroles du pasteur, puis le fil historique. */
export const videoCategories = [
  { id: 'visiteurs', label: 'Visites' },
  { id: 'consolation', label: 'Consolation' },
  { id: 'predications', label: 'Paroles du pasteur' },
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'epreuves', label: 'Épreuves' },
  { id: 'incendie', label: 'Le 17 mai 2026' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'culte-ciel-ouvert', label: 'Culte en plein air' },
  { id: 'reconstruction', label: 'Reconstruction' },
]

function yt(id, fields) {
  return {
    id: `yt-${id}`,
    youtubeId: id,
    url: `https://youtu.be/${id}`,
    embedUrl: youtubeEmbedUrl(id),
    thumbnail: youtubeThumb(id),
    speaker: null,
    description: '',
    duration: null,
    eventId: null,
    ...fields,
  }
}

export const videos = [
  {
    id: 'vid-24-mai-2026',
    title: 'Un prophète qui rougit',
    date: '2026-05-24',
    displayDate: '24 mai 2026',
    category: 'culte-ciel-ouvert',
    speaker: 'Pasteur Richard Diyoka',
    description: 'Prédication du culte du 24 mai 2026, une semaine après l’incendie.',
    url: null,
    thumbnail: null,
    duration: null,
    eventId: 'culte-ciel-ouvert-2026-05-24',
  },
  {
    id: 'vid-adoration-2016',
    title: 'Adoration à Moriah',
    date: '2016-07-24',
    displayDate: '24 juillet 2016',
    category: 'construction',
    speaker: 'Frère Dauphin ; Pasteur Richard Diyoka',
    description: 'Adoration attestée le 24 juillet 2016 au lieu nommé Moriah.',
    url: null,
    thumbnail: null,
    duration: null,
    eventId: 'c-2016-adoration',
  },
  yt('7iapsvA3cAc', {
    title: 'Visite de l’abbé Nsole à Shekinah Tabernacle après l’incendie',
    category: 'visiteurs',
    order: 1,
  }),
  yt('2RHFW26kB9E', {
    title: 'Visite du DG Israël Mutombo à l’église Shekinah Tabernacle',
    category: 'visiteurs',
    order: 2,
  }),
  yt('QjZKcqYJSKU', {
    title: 'Délégation de la CENCO à Shekinah Tabernacle après l’incendie',
    category: 'visiteurs',
    order: 3,
  }),
  yt('Ps6VhAjFJjs', {
    title: 'Visite à l’église Shekinah après ce moment difficile',
    category: 'visiteurs',
    order: 4,
  }),
  yt('kQrYkbb6J3A', {
    title: 'Augustin Kabuya en visite chez le pasteur Diyoka après l’incendie',
    category: 'visiteurs',
    order: 5,
  }),
  yt('71ZdUiq7vhk', {
    title: 'Visite de l’archevêque Ejiba Yamapia et de l’apôtre Mutombo',
    category: 'visiteurs',
    order: 6,
  }),
  yt('UYQ0LBlmIqc', {
    title: 'Visite de l’apôtre Moïse Kasongo chez le pasteur Diyoka',
    category: 'visiteurs',
    order: 7,
  }),
  yt('fIcTumQGAas', {
    title: 'Arrivée du gouverneur Daniel Bumba à Shekinah après l’incendie',
    category: 'visiteurs',
    order: 8,
  }),
  yt('m2HJqglWl1s', {
    title: 'Le pasteur Carlos Baruti à Shekinah Tabernacle après l’incendie',
    category: 'visiteurs',
    order: 9,
  }),
  yt('2zj3ZvWXyzs', {
    title: 'L’ancien Vibidila et Gédéon Kasonga venus réconforter l’ancien Diyoka',
    category: 'consolation',
    order: 1,
  }),
  yt('DCihRfsp_HM', {
    title: 'Le pasteur Walesa console le pasteur Diyoka et prie pour Shekinah Tabernacle',
    category: 'consolation',
    order: 2,
  }),
  yt('sFulpWC-gY4', {
    title: 'Le pasteur Walesa aux côtés du pasteur Richard Diyoka après l’incendie',
    category: 'consolation',
    order: 3,
  }),
  yt('faLZW-F647Q', {
    title: 'Le pasteur Carlos soutient Shekinah Tabernacle dans la prière',
    category: 'consolation',
    order: 4,
  }),
  yt('a3pw3etuOTA', {
    title: 'Descente de Nathan Epenge à Shekinah Tabernacle — réconfort au pasteur Diyoka',
    category: 'consolation',
    order: 5,
  }),
  yt('CpnUJtWPTBw', {
    title: 'Le pasteur Lifoko du Ciel au chevet du pasteur Richard Diyoka',
    date: '2026-05-19',
    displayDate: '19 mai 2026',
    category: 'consolation',
    order: 6,
  }),
  yt('Y13EKjagbCI', {
    title: 'Le pasteur Jean Sylvain Akouala envoie la force à l’ancien Diyoka',
    category: 'consolation',
    order: 7,
  }),
  yt('jfRnfEsePLk', {
    title: 'Le pasteur Léonard Kayumbi sur l’incendie de Shekinah Tabernacle',
    category: 'consolation',
    order: 8,
  }),
  yt('yZbI86g4LFU', {
    title: 'Annonce du pasteur Diyoka sur l’avenir du Temple',
    category: 'predications',
    speaker: 'Pasteur Richard Diyoka',
    order: 1,
  }),
  yt('Dh5DCXBdVK0', {
    title: 'Message du pasteur Diyoka à Shekinah Tabernacle avant la reconstruction',
    category: 'predications',
    speaker: 'Pasteur Richard Diyoka',
    order: 2,
  }),
  yt('exwG1iMg0-o', {
    title: 'Construction de l’église Shekinah Tabernacle Kinshasa',
    category: 'construction',
    order: 1,
  }),
  yt('07g54JOCZUk', {
    title: 'Reportage à la dédicace de Shekinah Tabernacle, Moriah',
    category: 'dedicace',
    order: 1,
  }),
  yt('1_BjATZsrVk', {
    title: 'L’église Shekinah Tabernacle dans l’eau',
    category: 'epreuves',
    order: 1,
  }),
  yt('kxvIY40j7Xg', {
    title: 'Premier culte après l’incendie',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    category: 'incendie',
    order: 1,
  }),
  yt('uVWscWTevlI', {
    title: 'État actuel du Temple Moriah de Shekinah Tabernacle',
    category: 'apres-incendie',
    order: 1,
  }),
  yt('o_-EVmY72xk', {
    title: 'La reconstruction du Temple Moriah',
    category: 'reconstruction',
    speaker: 'Pasteur Richard Diyoka',
    order: 1,
  }),
  {
    id: 'vid-temple-vie',
    title: 'Le Temple Moriah',
    category: 'dedicace',
    date: '2018-08',
    displayDate: 'Août 2018',
    url: `${DONATION_ASSETS}/temple-before.mp4`,
    thumbnail: `${DONATION_ASSETS}/dedicace.JPG`,
    speaker: null,
    description: '',
    duration: null,
    eventId: null,
    order: 2,
  },
  {
    id: 'vid-temple-incendie',
    title: 'L’incendie du Temple Moriah',
    category: 'incendie',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    url: `${DONATION_ASSETS}/temple-after.mp4`,
    thumbnail: `${DONATION_ASSETS}/main-entrance-after.jpg`,
    speaker: null,
    description: '',
    duration: null,
    eventId: 'incendie-2026-05-17',
    order: 2,
  },
]

export const youtubeVideos = videos
  .filter((v) => v.youtubeId || v.url)
  .slice()
  .sort((a, b) => {
    const ia = videoCategories.findIndex((c) => c.id === a.category)
    const ib = videoCategories.findIndex((c) => c.id === b.category)
    if (ia !== ib) return ia - ib
    return (a.order || 0) - (b.order || 0)
  })

export function videoCategoryLabel(id) {
  return videoCategories.find((c) => c.id === id)?.label || ''
}

export function videosInCategory(categoryId) {
  return youtubeVideos.filter((v) => v.category === categoryId)
}

export function groupYoutubeVideos(list = youtubeVideos) {
  return videoCategories
    .map((cat) => ({
      ...cat,
      videos: list.filter((v) => v.category === cat.id),
    }))
    .filter((group) => group.videos.length)
}

export const photoCategories = [
  { id: 'avant', label: 'Avant' },
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'vie', label: 'Vie du Temple' },
  { id: 'epreuves', label: 'Épreuves' },
  { id: 'incendie', label: 'Le 17 mai 2026' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'culte-ciel-ouvert', label: 'Culte en plein air' },
  { id: 'visiteurs', label: 'Visites' },
  { id: 'reconstruction', label: 'Reconstruction' },
]

function photo(fields) {
  return {
    event: '',
    caption: '',
    context: '',
    src: null,
    ...fields,
  }
}

const dedicaceAlbum = Array.from({ length: 34 }, (_, i) =>
  photo({
    id: `ph-dedicace-${i}`,
    title: 'Dédicace Temple Moriah',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    src: `${CHURCH_2018}/image${i}.jpg`,
  }),
)

export const photos = [
  ...dedicaceAlbum,
  photo({
    id: 'ph-dedicace-vue',
    title: 'Dédicace du Temple Moriah',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    src: `${DONATION_ASSETS}/dedicace.JPG`,
  }),
  photo({
    id: 'ph-facade-avant',
    title: 'Façade principale',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    caption: 'Façade principale',
    src: `${DONATION_ASSETS}/main-entrance-before.png`,
  }),
  photo({
    id: 'ph-sanctuaire-avant',
    title: 'Sanctuaire et chaire',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    caption: 'Sanctuaire et chaire',
    src: `${DONATION_ASSETS}/interior-sanctuary.png`,
  }),
  photo({
    id: 'ph-balcon-avant',
    title: 'Vue du balcon',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    caption: 'Vue du balcon',
    src: `${DONATION_ASSETS}/interior-from%20balcony.png`,
  }),
  photo({
    id: 'ph-toiture-avant',
    title: 'Toiture et structure',
    date: '2018-08',
    displayDate: 'Août 2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    caption: 'Toiture et structure',
    src: `${DONATION_ASSETS}/sanctuary-defore.jpeg`,
  }),
  photo({
    id: 'ph-facade-apres',
    title: 'Façade principale',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    year: '2026',
    category: 'apres-incendie',
    event: 'Après l’incendie',
    caption: 'Façade principale',
    src: `${DONATION_ASSETS}/main-entrance-after.jpg`,
  }),
  photo({
    id: 'ph-sanctuaire-apres',
    title: 'Sanctuaire et chaire',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    year: '2026',
    category: 'apres-incendie',
    event: 'Après l’incendie',
    caption: 'Sanctuaire et chaire',
    src: `${DONATION_ASSETS}/sanctuary-after.jpeg`,
  }),
  photo({
    id: 'ph-balcon-apres',
    title: 'Vue du balcon',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    year: '2026',
    category: 'apres-incendie',
    event: 'Après l’incendie',
    caption: 'Vue du balcon',
    src: `${DONATION_ASSETS}/balcony-after.jpeg`,
  }),
  photo({
    id: 'ph-toiture-apres',
    title: 'Toiture et structure',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    year: '2026',
    category: 'apres-incendie',
    event: 'Après l’incendie',
    caption: 'Toiture et structure',
    src: `${DONATION_ASSETS}/roof-after.jpeg`,
  }),
  photo({
    id: 'ph-culte-ciel-ouvert',
    title: 'Culte à ciel ouvert',
    date: '2026-05-24',
    displayDate: '24 mai 2026',
    year: '2026',
    category: 'culte-ciel-ouvert',
    event: 'Culte à ciel ouvert',
    caption: 'Culte à ciel ouvert',
    src: `${DONATION_ASSETS}/currently-open-sky-service.jpeg`,
  }),
]

export function photosInCategory(categoryId) {
  return photos.filter((p) => p.category === categoryId && p.src)
}

export const beforeAfterPairs = [
  {
    id: 'facade',
    title: 'Façade principale',
    before: `${DONATION_ASSETS}/main-entrance-before.png`,
    after: `${DONATION_ASSETS}/main-entrance-after.jpg`,
  },
  {
    id: 'sanctuaire',
    title: 'Sanctuaire et chaire',
    before: `${DONATION_ASSETS}/interior-sanctuary.png`,
    after: `${DONATION_ASSETS}/sanctuary-after.jpeg`,
  },
  {
    id: 'balcon',
    title: 'Vue du balcon',
    before: `${DONATION_ASSETS}/interior-from%20balcony.png`,
    after: `${DONATION_ASSETS}/balcony-after.jpeg`,
  },
  {
    id: 'toiture',
    title: 'Toiture et structure',
    before: `${DONATION_ASSETS}/sanctuary-defore.jpeg`,
    after: `${DONATION_ASSETS}/roof-after.jpeg`,
  },
]

export const documents = [
  {
    id: 'doc-album-dedicace',
    type: 'photographies',
    title: 'Album — Dédicace Temple Moriah',
    date: '2018',
    category: 'dedicace',
    description: 'Ensemble photographique de la dédicace de 2018.',
  },
  {
    id: 'doc-communique-compassion',
    type: 'messages',
    title: 'Communiqué de remerciement après l’incendie',
    date: '2026-05',
    category: 'apres-incendie',
    description: 'Remerciement du pasteur Richard Diyoka et de la communauté à ceux qui ont manifesté leur compassion.',
  },
  {
    id: 'doc-pastor-message-pdf',
    type: 'pdf',
    title: 'Message du pasteur',
    date: '',
    author: 'Pasteur Richard Diyoka',
    category: 'reconstruction',
    viewerType: 'pdf',
    url: `${DONATION_ASSETS}/pastor-message.pdf`,
    summary: 'Lecture du message pastoral.',
    description: 'Lecture du message pastoral.',
  },
]
