/**
 * 17 mai 2026 — incendie du Temple Moriah
 * Présentation documentaire. Distinguer fait établi, parole, hypothèse.
 */

export const fireRecord = {
  date: '2026-05-17',
  displayDate: 'Dimanche 17 mai 2026',
  title: 'Le 17 mai 2026',
  location: 'Temple Moriah, Shekinah Tabernacle, 18 boulevard Lumumba, quartier Debonhomme, commune de Matete, Kinshasa',
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
          text: 'Les dégâts matériels sont considérables : une grande partie de l’édifice et de ses équipements (sonorisation, mobilier, installations intérieures) a été atteinte.',
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
          text: 'Le gouverneur de la ville-province de Kinshasa, Daniel Bumba, s’est rendu sur place afin d’évaluer les dégâts.',
          status: 'verified',
        },
        {
          text: 'Les causes exactes n’étaient pas établies au moment des premières communications publiques. Des hypothèses (dont un dysfonctionnement électrique évoqué par des responsables de l’église) ont circulé ; elles ne constituent pas une conclusion d’enquête.',
          status: 'verified',
        },
      ],
    },
    apres: {
      title: 'Après l’événement',
      kind: 'fait',
      paragraphs: [
        'Le pasteur Richard Diyoka s’exprime le jour même devant les fidèles, appelle au calme et à la solidarité, et remercie les personnalités religieuses et les autorités venues témoigner leur soutien.',
        'Des séances de prière et de communion sont annoncées. Une équipe doit être mise en place pour évaluer les dégâts.',
        'Dans les jours suivants, l’assemblée se rassemble à nouveau, notamment le 24 mai 2026. Plus tard, une expertise structurelle conduira à la décision de démolir entièrement l’édifice pour reconstruire.',
      ],
    },
  },
  images: [],
  videos: [],
  testimonies: [],
  reactions: [
    {
      id: 'gouverneur',
      author: 'Daniel Bumba',
      role: 'Gouverneur de la ville-province de Kinshasa',
      kind: 'fait',
      text: 'Présence sur les lieux le jour du sinistre, pour évaluer les dégâts. Le contenu d’une éventuelle déclaration officielle reste à verser aux archives.',
      status: 'to_complete',
    },
  ],
}
