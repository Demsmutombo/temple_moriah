import { youtubeEmbedUrl, youtubeThumb } from '@/utils/youtube'
import { byChrono, sortChrono } from '@/utils/chrono'

const DONATION_ASSETS = 'https://donation.shekinahgospel.org/assets'
const CHURCH_2018 = 'https://shekinahgospel.org/images/church/2018'
const DEDICACE_PLAYLIST = 'PLLxAr9HDy9_WkpXFQAV66LGyK6xDIDEsT'

/** Parole ou commentaire lié à chaque temps du récit. Aucune citation inventée. */
export const mediaCompanions = {
  construction: {
    years: '2011 — 2018',
    comment: 'Sept années pour élever le Temple Moriah : première pierre, charpente métallique, maçonnerie, finitions et parvis.',
    word: {
      text: 'Tout commença par la pose de la première pierre angulaire.',
      attribution: 'Récit de la construction',
    },
  },
  dedicace: {
    years: 'Août 2018',
    comment: 'Quinze captations, du 8 au 12 août 2018. Chaque prédication s’ouvre dans l’ordre des jours, sans passer à une autre vidéo.',
    word: {
      text: 'Je suis joyeux quand on me dit : Allons à la maison de l’Éternel !',
      attribution: 'Psaume 122:1',
    },
  },
  vie: {
    years: '2018 — 2026',
    comment: 'Huit années de cultes, de paroles et de rencontres dans le Temple Moriah.',
    word: {
      text: 'Je suis joyeux quand on me dit : Allons à la maison de l’Éternel !',
      attribution: 'Psaume 122:1',
    },
  },
  avant: {
    years: 'Avant 2026',
    comment: 'Le Temple tel qu’il se tenait, avant le 17 mai 2026.',
    word: {
      text: 'Je suis joyeux quand on me dit : Allons à la maison de l’Éternel !',
      attribution: 'Psaume 122:1',
    },
  },
  epreuves: {
    years: 'Avant le 17 mai 2026',
    comment: 'L’épreuve d’eau, distincte de l’incendie de 2026. Les captations de ce temps sont rassemblées ici.',
    word: {
      text: 'C’est là ce qui fait votre joie, quoique maintenant, puisqu’il le faut, vous soyez attristés pour un peu de temps par diverses épreuves.',
      attribution: '1 Pierre 1:6',
    },
  },
  incendie: {
    years: '17 mai 2026',
    comment: 'Un incendie dévastateur ravage le Temple Moriah, détruisant une grande partie de l’édifice.',
    word: {
      text: 'Une enquête sera menée afin de déterminer l’origine exacte de cet incendie.',
      attribution: 'Pasteur Richard Diyoka',
    },
  },
  'apres-incendie': {
    years: 'Mai 2026',
    comment: 'Après le feu, l’assemblée tient le culte dehors. Les images montrent l’ampleur des dégâts.',
    word: {
      text: 'Que Dieu vous bénisse abondamment',
      attribution: 'Révérend Pasteur Richard Diyoka Nsanguluja',
    },
  },
  consolation: {
    years: 'Mai 2026',
    comment: 'Pasteurs, autorités, délégations et frères viennent prier, consoler et se tenir auprès de Shekinah Tabernacle.',
    word: {
      text: 'Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse.',
      attribution: 'Psaume 46:1',
    },
  },
  'culte-ciel-ouvert': {
    years: '24 mai 2026',
    comment: 'Sept jours après l’incendie, l’assemblée se rassemble sur le parvis. Le pasteur prêche « Un prophète qui rougit ».',
    word: {
      text: 'La structure matérielle est à terre, mais notre ferveur est debout. Nous nous relevons dès aujourd’hui.',
      attribution: 'Pasteur Richard Diyoka',
    },
  },
  predications: {
    years: '2026',
    comment: 'Paroles du pasteur sur l’épreuve, l’Église et l’avenir du Temple.',
    word: {
      text: 'Levons-nous, et bâtissons ! Et ils se fortifièrent dans cette bonne résolution.',
      attribution: 'Néhémie 2:18',
    },
  },
  reconstruction: {
    years: '2026 →',
    comment: 'Après l’expertise, la décision de démolir pour reconstruire. La première pierre du nouveau temple est posée le 24 juillet 2026.',
    word: {
      text: 'Levons-nous, et bâtissons ! Et ils se fortifièrent dans cette bonne résolution.',
      attribution: 'Néhémie 2:18',
    },
  },
}

export function mediaCompanion(categoryId) {
  const id = categoryId === 'visiteurs' ? 'consolation' : categoryId
  return mediaCompanions[id] || null
}

/** Ordre du récit : construction → dédicace → épreuve → relèvement. */
export const videoCategories = [
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'epreuves', label: 'Épreuve d’eau' },
  { id: 'incendie', label: 'Le 17 mai 2026' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'consolation', label: 'Consolation et visites' },
  { id: 'culte-ciel-ouvert', label: 'Culte en plein air' },
  { id: 'predications', label: 'Paroles du pasteur' },
  { id: 'reconstruction', label: 'Reconstruction' },
]

const VIDEO_ERA = {
  construction: '2016',
  dedicace: '2018-08',
  epreuves: '2020',
  incendie: '2026-05-17',
  'apres-incendie': '2026-05-18',
  consolation: '2026-05',
  'culte-ciel-ouvert': '2026-05-24',
  predications: '2026-07',
  reconstruction: '2026-07-24',
}

function videoSortDate(video) {
  return video.date || VIDEO_ERA[video.category] || ''
}

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
  yt('2RHFW26kB9E', {
    title: 'Visite du DG Israël Mutombo à l’église Shekinah Tabernacle',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('QjZKcqYJSKU', {
    title: 'Délégation de la CENCO à Shekinah Tabernacle après l’incendie',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('Ps6VhAjFJjs', {
    title: 'Visite à l’église Shekinah après ce moment difficile',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('kQrYkbb6J3A', {
    title: 'Augustin Kabuya en visite chez le pasteur Diyoka après l’incendie',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('71ZdUiq7vhk', {
    title: 'Visite de l’archevêque Ejiba Yamapia et de l’apôtre Mutombo',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('UYQ0LBlmIqc', {
    title: 'Visite de l’apôtre Moïse Kasongo chez le pasteur Diyoka',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('fIcTumQGAas', {
    title: 'Arrivée du gouverneur Daniel Bumba à Shekinah après l’incendie',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    category: 'consolation',
  }),
  yt('m2HJqglWl1s', {
    title: 'Le pasteur Carlos Baruti à Shekinah Tabernacle après l’incendie',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('2zj3ZvWXyzs', {
    title: 'L’ancien Vibidila et Gédéon Kasonga venus réconforter l’ancien Diyoka',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('DCihRfsp_HM', {
    title: 'Le pasteur Walesa console le pasteur Diyoka et prie pour Shekinah Tabernacle',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('faLZW-F647Q', {
    title: 'Le pasteur Carlos soutient Shekinah Tabernacle dans la prière',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('a3pw3etuOTA', {
    title: 'Descente de Nathan Epenge à Shekinah Tabernacle — réconfort au pasteur Diyoka',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('CpnUJtWPTBw', {
    title: 'Le pasteur Lifoko du Ciel au chevet du pasteur Richard Diyoka',
    date: '2026-05-19',
    displayDate: '19 mai 2026',
    category: 'consolation',
  }),
  yt('Y13EKjagbCI', {
    title: 'Le pasteur Jean Sylvain Akouala envoie la force à l’ancien Diyoka',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('jfRnfEsePLk', {
    title: 'Le pasteur Léonard Kayumbi sur l’incendie de Shekinah Tabernacle',
    date: '2026-05',
    displayDate: 'Mai 2026',
    category: 'consolation',
  }),
  yt('yZbI86g4LFU', {
    title: 'Annonce du pasteur Diyoka sur l’avenir du Temple',
    date: '2026-07',
    displayDate: 'Juillet 2026',
    category: 'predications',
    speaker: 'Pasteur Richard Diyoka',
  }),
  yt('Dh5DCXBdVK0', {
    title: 'Message du pasteur Diyoka à Shekinah Tabernacle avant la reconstruction',
    date: '2026-07',
    displayDate: 'Juillet 2026',
    category: 'predications',
    speaker: 'Pasteur Richard Diyoka',
  }),
  yt('exwG1iMg0-o', {
    title: 'Construction de l’église Shekinah Tabernacle Kinshasa',
    date: '2016',
    displayDate: '2011 — 2018',
    category: 'construction',
  }),
  yt('MwBs6V-nCfM', {
    title: 'Pasteur Richard Diyoka',
    date: '2018-08-08',
    displayDate: '8 août 2018 · soir',
    category: 'dedicace',
    speaker: 'Pasteur Richard Diyoka',
    playlistId: DEDICACE_PLAYLIST,
    seq: 1,
  }),
  yt('t43uMOBcct0', {
    title: 'Séance du matin',
    date: '2018-08-09',
    displayDate: '9 août 2018 · matin',
    category: 'dedicace',
    playlistId: DEDICACE_PLAYLIST,
    seq: 2,
  }),
  yt('nUBajTkjk7E', {
    title: 'Pasteur Kalumbu Kiseka',
    date: '2018-08-09',
    displayDate: '9 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Kalumbu Kiseka',
    playlistId: DEDICACE_PLAYLIST,
    seq: 3,
  }),
  yt('q7zpuubZBmI', {
    title: 'Pasteur Faustin Lukumwena',
    date: '2018-08-09',
    displayDate: '9 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Faustin Lukumwena',
    playlistId: DEDICACE_PLAYLIST,
    seq: 4,
  }),
  yt('x4cCWfqv2Ls', {
    title: 'Pasteur Nestor Espanolla',
    date: '2018-08-09',
    displayDate: '9 août 2018 · soir',
    category: 'dedicace',
    speaker: 'Pasteur Nestor Espanolla',
    playlistId: DEDICACE_PLAYLIST,
    seq: 5,
  }),
  yt('qFtyPx0Pu_M', {
    title: 'Pasteur Tom Rae',
    date: '2018-08-09',
    displayDate: '9 août 2018 · soir',
    category: 'dedicace',
    speaker: 'Pasteur Tom Rae',
    playlistId: DEDICACE_PLAYLIST,
    seq: 6,
  }),
  yt('MELkbGYQJWE', {
    title: 'Rabbin Jean-Marc Rosenfeld',
    date: '2018-08-10',
    displayDate: '10 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Rabbin Jean-Marc Rosenfeld',
    playlistId: DEDICACE_PLAYLIST,
    seq: 7,
  }),
  yt('lOFoBlUc_2o', {
    title: 'Pasteur Kayumbi',
    date: '2018-08-10',
    displayDate: '10 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Kayumbi',
    playlistId: DEDICACE_PLAYLIST,
    seq: 8,
  }),
  yt('eqD_EoqHQ4w', {
    title: 'Pasteur Peterson',
    date: '2018-08-10',
    displayDate: '10 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Peterson',
    playlistId: DEDICACE_PLAYLIST,
    seq: 9,
  }),
  yt('Gsz-I90XGPg', {
    title: 'Pasteur Pierre Yao',
    date: '2018-08-10',
    displayDate: '10 août 2018 · soir',
    category: 'dedicace',
    speaker: 'Pasteur Pierre Yao',
    playlistId: DEDICACE_PLAYLIST,
    seq: 10,
  }),
  yt('5SVKxDVjzVA', {
    title: 'Pasteur Veerapen Chetty',
    date: '2018-08-11',
    displayDate: '11 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Veerapen Chetty',
    playlistId: DEDICACE_PLAYLIST,
    seq: 11,
  }),
  yt('XWD7XVqLCKc', {
    title: 'Pasteur Richard Diyoka',
    date: '2018-08-11',
    displayDate: '11 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur Richard Diyoka',
    playlistId: DEDICACE_PLAYLIST,
    seq: 12,
  }),
  yt('-6rqOaC8mng', {
    title: 'Pasteur David Mc Geary',
    date: '2018-08-12',
    displayDate: '12 août 2018 · matin',
    category: 'dedicace',
    speaker: 'Pasteur David Mc Geary',
    playlistId: DEDICACE_PLAYLIST,
    seq: 13,
  }),
  yt('pAm0PdEMoks', {
    title: 'Cérémonie de dédicace, 1re partie',
    date: '2018-08-12',
    displayDate: '12 août 2018 · matin',
    category: 'dedicace',
    playlistId: DEDICACE_PLAYLIST,
    seq: 14,
  }),
  yt('n2R2_bXcXXE', {
    title: 'Cérémonie de dédicace, 2e partie',
    date: '2018-08-12',
    displayDate: '12 août 2018 · matin',
    category: 'dedicace',
    playlistId: DEDICACE_PLAYLIST,
    seq: 15,
  }),
  yt('1_BjATZsrVk', {
    title: 'L’église Shekinah Tabernacle dans l’eau',
    category: 'epreuves',
    seq: 1,
  }),
  yt('lVqw6CF2z-w', {
    title: 'Honorable Auguy Kal Onji à Shekinah Tabernacle',
    category: 'epreuves',
    speaker: 'Honorable Auguy Kal Onji',
    seq: 2,
  }),
  yt('kxvIY40j7Xg', {
    title: 'Premier culte après l’incendie',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    category: 'incendie',
  }),
  yt('uVWscWTevlI', {
    title: 'État actuel du Temple Moriah de Shekinah Tabernacle',
    date: '2026-05-17',
    displayDate: '17 mai 2026',
    category: 'apres-incendie',
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
    seq: 16,
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

export const youtubeVideos = sortChrono(
  videos.filter((v) => v.youtubeId || v.url),
  videoSortDate,
)

export function videoCategoryLabel(id) {
  return videoCategories.find((c) => c.id === id)?.label || ''
}

export function videosInCategory(categoryId) {
  return youtubeVideos
    .filter((v) => v.category === categoryId)
    .slice()
    .sort((a, b) => (a.seq ?? 50) - (b.seq ?? 50) || String(videoSortDate(a)).localeCompare(String(videoSortDate(b))))
}

export function groupYoutubeVideos(list = youtubeVideos) {
  return videoCategories
    .map((cat) => ({
      ...cat,
      videos: list
        .filter((v) => v.category === cat.id)
        .slice()
        .sort((a, b) => (a.seq ?? 50) - (b.seq ?? 50) || String(videoSortDate(a)).localeCompare(String(videoSortDate(b)))),
    }))
    .filter((group) => group.videos.length)
}

export const photoCategories = [
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'vie', label: 'Vie du Temple' },
  { id: 'avant', label: 'Avant' },
  { id: 'epreuves', label: 'Épreuve d’eau' },
  { id: 'incendie', label: 'Le 17 mai 2026' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'culte-ciel-ouvert', label: 'Culte en plein air' },
  { id: 'consolation', label: 'Consolation et visites' },
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

const photoList = [
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
    caption: 'Façade principale avant l’épreuve.',
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
    caption: 'Le sanctuaire et la chaire, avant l’incendie.',
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
    caption: 'Perspective sur l’assemblée depuis le grand balcon supérieur.',
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
    caption: 'Toiture et structure du sanctuaire, avant l’incendie.',
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
    caption: 'La façade après l’incendie du 17 mai 2026.',
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
    caption: 'Le sanctuaire consumé, après le feu.',
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
    caption: 'Le balcon effondré, recouvert de débris de tôle et de charpente calcinée.',
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
    caption: 'La toiture effondrée, l’édifice à ciel ouvert.',
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
    caption: 'Culte à ciel ouvert sur le parvis, le 24 mai 2026.',
    src: `${DONATION_ASSETS}/currently-open-sky-service.jpeg`,
  }),
]

export const photos = sortChrono(photoList, (p) => p.date).sort((a, b) => {
  const dateCmp = byChrono(a, b, (p) => p.date)
  if (dateCmp !== 0) return dateCmp
  return String(a.id).localeCompare(String(b.id), undefined, { numeric: true })
})

export function photosInCategory(categoryId) {
  return photos.filter((p) => p.category === categoryId && p.src)
}

export const beforeAfterPairs = [
  {
    id: 'facade',
    title: 'Façade principale',
    beforeCaption: 'La façade du Temple, avant l’épreuve.',
    afterCaption: 'La façade après l’incendie du 17 mai 2026.',
    before: `${DONATION_ASSETS}/main-entrance-before.png`,
    after: `${DONATION_ASSETS}/main-entrance-after.jpg`,
  },
  {
    id: 'sanctuaire',
    title: 'Sanctuaire et chaire',
    beforeCaption: 'Le sanctuaire et la chaire.',
    afterCaption: 'L’intérieur consumé après le feu.',
    before: `${DONATION_ASSETS}/interior-sanctuary.png`,
    after: `${DONATION_ASSETS}/sanctuary-after.jpeg`,
  },
  {
    id: 'balcon',
    title: 'Vue du balcon',
    beforeCaption: 'Perspective panoramique sur l’assemblée depuis le grand balcon supérieur.',
    afterCaption: 'Le balcon effondré, recouvert de débris de tôle et de charpente calcinée.',
    before: `${DONATION_ASSETS}/interior-from%20balcony.png`,
    after: `${DONATION_ASSETS}/balcony-after.jpeg`,
  },
  {
    id: 'toiture',
    title: 'Toiture et structure',
    beforeCaption: 'La toiture et la structure du sanctuaire.',
    afterCaption: 'La toiture effondrée, l’édifice à ciel ouvert.',
    before: `${DONATION_ASSETS}/sanctuary-defore.jpeg`,
    after: `${DONATION_ASSETS}/roof-after.jpeg`,
  },
]

export const documents = sortChrono([
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
    date: '2026-07',
    author: 'Pasteur Richard Diyoka',
    category: 'reconstruction',
    viewerType: 'pdf',
    url: `${DONATION_ASSETS}/pastor-message.pdf`,
    summary: 'Lecture du message pastoral.',
    description: 'Lecture du message pastoral.',
  },
])
