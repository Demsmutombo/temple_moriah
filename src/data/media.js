import { youtubeEmbedUrl, youtubeThumb } from '@/utils/youtube'

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
]

export const youtubeVideos = videos
  .filter((v) => v.youtubeId)
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

export const photos = [
  {
    id: 'ph-dedicace-album',
    title: 'Album de la dédicace',
    date: '2018',
    year: '2018',
    category: 'dedicace',
    event: 'Dédicace du Temple Moriah',
    caption: 'Photographies de la dédicace — à verser aux archives.',
    context: '',
    src: null,
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
    url: 'https://donation.shekinahgospel.org/assets/pastor-message.pdf',
    summary: 'Lecture du message pastoral.',
    description: 'Lecture du message pastoral.',
  },
]
