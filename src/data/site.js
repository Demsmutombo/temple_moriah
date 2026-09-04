/**
 * Temple Moriah — données institutionnelles
 *
 * Règle : ne jamais inventer un fait. Distinguer
 * fait / parole / témoignage / citation biblique / narration.
 */

export const CONTENT_KINDS = {
  fait: 'Fait historique',
  parole: 'Parole',
  temoignage: 'Témoignage',
  citation_biblique: 'Citation biblique',
  narration: 'Narration éditoriale',
}

export const site = {
  name: 'Temple Moriah',
  church: 'Shekinah Tabernacle',
  city: 'Kinshasa',
  commune: 'Matete',
  quartier: 'Debonhomme',
  address: '18 Boulevard Lumumba, Matete, Kinshasa',
  country: 'République démocratique du Congo',
  pastor: {
    name: 'Révérend Pasteur Richard Diyoka Nsanguluja',
    shortName: 'Pasteur Richard Diyoka',
    title: 'Pasteur de Shekinah Tabernacle',
  },
  email: 'shekinahrdc@gmail.com',
  phone: '+243 810 500 500',
  officialSite: 'https://shekinahgospel.org/',
  donationUrl: 'https://donation.shekinahgospel.org/',
  donationEmail: 'donation@shekinahgospel.org',
  tagline: 'Un bâtiment peut être détruit. Une mémoire ne doit pas disparaître.',
  motto: 'De la cendre à la splendeur de l’Éternel',
  developer: {
    name: 'Israel Mutombo IM',
    initials: 'IM',
    phone: '0893002461',
    phoneDisplay: '089 300 24 61',
    tel: 'tel:+243893002461',
    whatsapp: 'https://wa.me/243893002461',
    email: 'israelmutombo9319@gmail.com',
    mailto: 'mailto:israelmutombo9319@gmail.com',
  },
}

export const periods = [
  {
    id: 'vision',
    roman: 'I',
    title: 'La vision',
    years: 'Origine',
    path: '/histoire',
    summary: 'L’origine d’un projet spirituel et communautaire, avant même les murs.',
  },
  {
    id: 'construction',
    roman: 'II',
    title: 'La construction',
    years: '2011 — 2018',
    path: '/construction',
    summary: 'Les années de chantier, de sacrifice et d’édification du Temple.',
  },
  {
    id: 'vie',
    roman: 'III',
    title: 'La vie et la mémoire',
    years: '2018 — 17 mai 2026',
    path: '/vie-du-temple',
    summary: 'La dédicace, les cultes, les visites, les archives d’une maison de rassemblement.',
  },
  {
    id: 'epreuve',
    roman: 'IV',
    title: 'De la cendre à la reconstruction',
    years: '17 mai 2026 — aujourd’hui',
    path: '/epreuve',
    summary: 'Le sinistre du 17 mai 2026, le culte à ciel ouvert, la solidarité et l’élan pour rebâtir.',
  },
]

export const navItems = [
  { label: 'Accueil', path: '/' },
  {
    label: 'L’Histoire',
    path: '/histoire',
    children: [
      { label: 'La vision', path: '/histoire' },
      { label: 'La construction', path: '/construction' },
      { label: 'La dédicace', path: '/dedicace' },
      { label: 'La vie du Temple', path: '/vie-du-temple' },
    ],
  },
  {
    label: 'L’Épreuve',
    path: '/epreuve',
    children: [
      { label: 'Le 17 mai 2026', path: '/epreuve' },
      { label: 'Après l’incendie', path: '/apres-incendie' },
      { label: 'Ils sont venus nous consoler', path: '/consolation' },
    ],
  },
  {
    label: 'Les Voix',
    path: '/voix',
    children: [
      { label: 'Paroles du pasteur', path: '/voix/pasteur' },
      { label: 'Témoignages', path: '/voix/temoignages' },
      { label: 'Visiteurs', path: '/voix/visiteurs' },
    ],
  },
  {
    label: 'Archives',
    path: '/archives',
    children: [
      { label: 'Toutes les archives', path: '/archives' },
      { label: 'Galerie photo', path: '/galerie' },
      { label: 'Médiathèque', path: '/mediatheque' },
    ],
  },
  { label: 'Reconstruction', path: '/reconstruction' },
  { label: 'Livre de mémoire', path: '/livre-de-memoire' },
  { label: 'À propos', path: '/a-propos' },
]

export const biblicalReferences = [
  {
    id: 'ps122',
    reference: 'Psaume 122:1',
    text: 'Je suis joyeux quand on me dit : Allons à la maison de l’Éternel !',
    context: 'Associé, sur le site officiel de Shekinah Tabernacle, à la dédicace du Temple Moriah en 2018.',
    kind: 'citation_biblique',
  },
  {
    id: 'lam2',
    reference: 'Lamentations 2:1-3, 6-8, 11',
    text: null,
    context: 'Texte associé, sur le site officiel, à la page consacrée au Temple Moriah le 17 mai 2026.',
    kind: 'citation_biblique',
  },
  {
    id: 'esa64',
    reference: 'Ésaïe 64:1-11',
    text: null,
    context: 'Texte associé, sur le site officiel, à la mémoire du 17 mai 2026.',
    kind: 'citation_biblique',
  },
  {
    id: 'neh2',
    reference: 'Néhémie 2:17-18',
    text: 'Levons-nous, et bâtissons ! Et ils se fortifièrent dans cette bonne résolution.',
    context: 'Appel à rebâtir, associé à la reconstruction du Temple Moriah.',
    kind: 'citation_biblique',
  },
  {
    id: 'hag1',
    reference: 'Aggée 1:7-8',
    text: 'Ainsi parle l’Éternel des armées : Considérez attentivement vos voies ! Montez sur la montagne, apportez du bois, et bâtissez la maison.',
    context: 'Appel à rebâtir, associé à la reconstruction du Temple Moriah.',
    kind: 'citation_biblique',
  },
  {
    id: 'ch29',
    reference: '1 Chroniques 29:13-14',
    text: 'Maintenant, ô notre Dieu, nous Te louons, et nous célébrons Ton Nom Glorieux. Car qui suis-je et qui est mon peuple, pour que nous puissions Te faire volontairement ces offrandes ?',
    context: 'Parole du roi David, associée à l’appel aux offrandes volontaires pour rebâtir.',
    kind: 'citation_biblique',
  },
]
