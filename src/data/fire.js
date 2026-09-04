/**
 * 17 mai 2026 — incendie du Temple Moriah
 * Présentation documentaire. Distinguer fait établi, parole, hypothèse.
 */

export const fireRecord = {
  date: '2026-05-17',
  displayDate: 'Dimanche 17 mai 2026',
  title: 'Sinistre majeur — 17 mai 2026',
  location: 'Temple Moriah, Shekinah Tabernacle, 18 boulevard Lumumba, quartier Debonhomme, commune de Matete, Kinshasa',
  officialLead:
    'Le 17 mai 2026, un incendie dévastateur a ravagé le Temple Moriah de Shekinah Tabernacle, détruisant une grande partie de l’édifice et causant de très lourdes pertes matérielles.',
  images: ['ph-facade-apres', 'ph-sanctuaire-apres', 'ph-balcon-apres', 'ph-toiture-apres'],
  videos: ['vid-temple-incendie'],
  damages: [
    { id: 'facade', title: 'Façade principale', text: 'La façade a subi d’importants dommages structurels.', photoId: 'ph-facade-apres' },
    { id: 'sanctuaire', title: 'Sanctuaire intérieur', text: 'L’intérieur du sanctuaire, autrefois lieu de rassemblement, a été consumé.', photoId: 'ph-sanctuaire-apres' },
    { id: 'balcon', title: 'Vue du balcon', text: 'Le balcon et les structures adjacentes ont été fortement fragilisés.', photoId: 'ph-balcon-apres' },
    { id: 'toiture', title: 'Toiture et charpente', text: 'La toiture s’est effondrée. La charpente métallique a été détruite, laissant l’édifice à ciel ouvert.', photoId: 'ph-toiture-apres' },
    { id: 'equipements', title: 'Équipements et archives', text: 'Le système de sonorisation a disparu. La chaire principale, le bureau d’accueil des délégations et des archives pastorales ont été atteints.' },
  ],
  sections: {
    jour: {
      title: 'Le jour de l’événement',
      kind: 'fait',
      paragraphs: [
        'Un incendie se déclare tôt le matin du dimanche 17 mai 2026, avant le début des offices dominicaux, dans le Temple Moriah de Shekinah Tabernacle.',
        'Selon plusieurs témoignages concordants relayés par la presse, les flammes auraient commencé à se propager aux environs de 5 à 6 heures du matin, à l’intérieur de l’édifice.',
        'Une épaisse fumée noire s’élève au-dessus du temple. Des fidèles et des riverains tentent de limiter les dégâts, notamment en formant une chaîne humaine à l’aide de seaux d’eau, en attendant l’arrivée des secours.',
        'Les services de secours interviennent pour contenir les flammes et empêcher leur propagation aux habitations voisines.',
      ],
    },
    etabli: {
      title: 'Ce qui est officiellement établi',
      kind: 'fait',
      items: [
        {
          text: 'Le sinistre a eu lieu le dimanche 17 mai 2026, au Temple Moriah de Shekinah Tabernacle, à Matete.',
          status: 'verified',
        },
        {
          text: 'Les dégâts matériels sont considérables : charpente, toiture, intérieur du sanctuaire, sonorisation, chaire, bureau d’accueil et une part des archives ont été atteints.',
          status: 'verified',
        },
        {
          text: 'Aucun bilan officiel faisant état de victimes n’a été communiqué. Plusieurs sources indiquent qu’aucune perte en vie humaine n’a été signalée, l’incendie s’étant produit avant les cultes.',
          status: 'verified',
        },
        {
          text: 'Le pasteur Richard Diyoka a annoncé, le jour même, qu’une enquête serait menée afin de déterminer l’origine exacte de l’incendie, en lien avec les services compétents de l’État.',
          status: 'verified',
        },
        {
          text: 'La communication de l’Église présente ensuite un feu d’origine accidentelle, propagé en quelques heures.',
          status: 'verified',
        },
        {
          text: 'Le gouverneur de la ville-province de Kinshasa, Daniel Bumba, s’est rendu sur place afin d’évaluer les dégâts.',
          status: 'verified',
        },
      ],
    },
    apres: {
      title: 'Après l’événement',
      kind: 'fait',
      paragraphs: [
        'Le pasteur Richard Diyoka s’exprime le jour même devant les fidèles, appelle au calme et à la solidarité, et remercie les personnalités religieuses et les autorités venues témoigner leur soutien.',
        'L’assemblée est contrainte de tenir le culte dehors, pour adorer et rendre grâce au milieu de l’épreuve.',
        'Le 24 mai 2026, une semaine plus tard, un culte à ciel ouvert se tient sur le parvis. Plus tard, une expertise structurelle conduira à la décision de démolir entièrement l’édifice pour reconstruire.',
      ],
    },
  },
  testimonies: [],
  reactions: [
    {
      id: 'gouverneur',
      author: 'Daniel Bumba',
      role: 'Gouverneur de la ville-province de Kinshasa',
      kind: 'fait',
      text: 'Présence sur les lieux le jour du sinistre, pour évaluer les dégâts.',
      status: 'verified',
    },
  ],
}
