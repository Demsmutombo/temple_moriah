export const videoCategories = [
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'predications', label: 'Prédications' },
  { id: 'evenements', label: 'Événements' },
  { id: 'visiteurs', label: 'Visiteurs' },
  { id: 'incendie', label: 'Incendie' },
  { id: 'apres-incendie', label: 'Après-incendie' },
  { id: 'culte-ciel-ouvert', label: 'Culte à ciel ouvert' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'reconstruction', label: 'Reconstruction' },
]

export const videos = [
  {
    id: 'vid-24-mai-2026',
    title: 'Un prophète qui rougit',
    date: '2026-05-24',
    displayDate: '24 mai 2026',
    category: 'culte-ciel-ouvert',
    speaker: 'Pasteur Richard Diyoka',
    description: 'Prédication du culte du 24 mai 2026, une semaine après l’incendie. La captation reste à verser aux archives.',
    url: null,
    thumbnail: null,
    duration: null,
    eventId: 'culte-ciel-ouvert-2026-05-24',
    status: 'pending_archive',
  },
  {
    id: 'vid-adoration-2016',
    title: 'Adoration à Moriah',
    date: '2016-07-24',
    displayDate: '24 juillet 2016',
    category: 'construction',
    speaker: 'Frère Dauphin ; Pasteur Richard Diyoka',
    description: 'Adoration attestée au lieu nommé Moriah, avant la dédicace. Source externe à confirmer et à verser officiellement.',
    url: null,
    thumbnail: null,
    duration: null,
    eventId: 'c-2016-adoration',
    status: 'pending_archive',
  },
]

export const photoCategories = [
  { id: 'construction', label: 'Construction' },
  { id: 'dedicace', label: 'Dédicace' },
  { id: 'vie', label: 'Vie du Temple' },
  { id: 'incendie', label: 'Incendie' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'visiteurs', label: 'Visiteurs' },
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
    caption: 'Photographies officielles de la dédicace — à verser depuis les archives de Shekinah Tabernacle.',
    context: 'Album « 2018 - Dedicace Temple Moriah » mentionné sur le site officiel.',
    src: null,
    status: 'pending_archive',
  },
]

export const documents = [
  {
    id: 'doc-album-dedicace',
    type: 'photographies',
    title: 'Album — Dédicace Temple Moriah',
    date: '2018',
    category: 'dedicace',
    status: 'pending_archive',
    description: 'Ensemble photographique officiel de la dédicace de 2018.',
  },
  {
    id: 'doc-communique-compassion',
    type: 'messages',
    title: 'Communiqué de remerciement après l’incendie',
    date: '2026-05',
    category: 'apres-incendie',
    status: 'verified',
    description: 'Remerciement du pasteur Richard Diyoka et de la communauté à ceux qui ont manifesté leur compassion.',
  },
]
