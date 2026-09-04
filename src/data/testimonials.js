import { sortChrono } from '@/utils/chrono'

export const testimonialCategories = [
  { id: 'premier-souvenir', label: 'Mon premier souvenir' },
  { id: 'ce-que-le-temple-etait', label: 'Ce que le Temple représentait pour moi' },
  { id: 'moment', label: 'Un moment qui m’a marqué' },
  { id: 'apres-incendie', label: 'Après l’incendie' },
  { id: 'esperance', label: 'Mon espérance pour la reconstruction' },
]

function t(fields) {
  return {
    relation: '',
    excerpt: '',
    recit: '',
    ...fields,
  }
}

/** Messages d’encouragement déjà rendus publics, sans doublons. */
const testimonialList = [
  t({
    id: 'tm-schadrac',
    name: 'Frère Schadrac',
    relation: 'Kinshasa',
    date: '2026-09',
    category: 'apres-incendie',
    excerpt:
      'Oh seul le grand Dieu créateur sait pourquoi c’est arrivé. Notre prière est que le Dieu tout-puissant puisse soutenir et donner la force à son serviteur le pasteur Richard Diyoka pour surmonter cette épreuve.',
  }),
  t({
    id: 'tm-miriam',
    name: 'Sœur Miriam Nseya',
    relation: 'Kinshasa',
    date: '2026-08-14',
    category: 'esperance',
    excerpt:
      'Notre histoire est comme celle de Job. Nous serons toujours unis derrière notre pasteur. Nous l’aimerons toujours. Nous prouverons toujours au diable son échec.',
  }),
  t({
    id: 'tm-caleb',
    name: 'Frère Caleb',
    relation: 'Kinshasa',
    date: '2026-08-09',
    category: 'apres-incendie',
    excerpt: 'Que Dieu soutienne son serviteur.',
  }),
  t({
    id: 'tm-henoc',
    name: 'Frère Hénoc Bokosola',
    relation: 'Kinshasa, RDC',
    date: '2026-08-07',
    category: 'esperance',
    excerpt:
      'Que Dieu réconforte son serviteur le pasteur Richard Diyoka ainsi que toute l’Église, et leur donne assez de foi pour comprendre que si Dieu nous fait passer par une épreuve, c’est pour nous rendre meilleurs. 1 Pierre 1:6-18 ; Jacques 1:2-4.',
  }),
  t({
    id: 'tm-billy',
    name: 'Brother Billy Mulumba',
    relation: 'Johannesburg, Afrique du Sud',
    date: '2026-08-03',
    category: 'apres-incendie',
    excerpt:
      'Elperetz Tabernacle, Johannesburg. Shalom, cher pasteur. Que cette salutation apporte la paix à votre cœur. Nous croyons que tout arrive pour un dessein. Que la gloire revienne au Dieu tout-puissant, Jésus.',
  }),
  t({
    id: 'tm-estheur',
    name: 'Sœur Estheur Lidele Ngbawa',
    relation: 'Mbandaka, RDC',
    date: '2026-08-03',
    category: 'esperance',
    excerpt: 'Shalom ma famille. Que le bon Dieu vous bénisse. Le combat fait rage, mais nous avons la victoire. Tout concourt pour notre bien.',
  }),
  t({
    id: 'tm-ngbawa',
    name: 'Ngbawa Exaucé',
    relation: 'Mbandaka, RDC',
    date: '2026-08-03',
    category: 'apres-incendie',
    excerpt:
      'Nous rendons gloire à Dieu. Nous prions afin qu’il nous donne la force de vaincre ce temps.',
  }),
  t({
    id: 'tm-elie',
    name: 'Frère Élie du Ciel Kusameneka',
    relation: 'Kinshasa, RDC',
    date: '2026-08-02',
    category: 'esperance',
    excerpt:
      'Je crois de tout mon cœur que Dieu va donner de la force à mon pasteur Richard Diyoka. Je crois que Dieu veut voir son reflet dans Shekinah Tabernacle.',
  }),
  t({
    id: 'tm-theo',
    name: 'Frère Théo Tshibaka',
    relation: 'Kinshasa, RDC',
    date: '2026-07-26',
    category: 'ce-que-le-temple-etait',
    excerpt:
      'Nous garderons toujours une grande place pour notre Seigneur Jésus-Christ. Nous, les fidèles de Shekinah Tabernacle, avons un seul pasteur : Révérend Richard Diyoka. Cher pasteur, nous ne vous oublions jamais dans nos prières.',
  }),
  t({
    id: 'tm-enoch',
    name: 'Frère Enoch Makinu',
    relation: 'Kinshasa',
    date: '2026-07-26',
    category: 'ce-que-le-temple-etait',
    excerpt: 'Je tiens à soutenir mon église, malgré les hauts et les bas. Je suis membre de Shekinah Tabernacle / Popo.',
  }),
  t({
    id: 'tm-daddy-joseph',
    name: 'Frère Daddy Joseph Kalonji',
    relation: 'Kinshasa',
    date: '2026-07-23',
    category: 'esperance',
    excerpt: 'Que Dieu nous vienne en aide. On doit tout faire pour participer à la reconstruction.',
  }),
  t({
    id: 'tm-jonathan',
    name: 'Jonathan Mayala',
    relation: 'Kitwe, Zambie',
    date: '2026-07-20',
    category: 'ce-que-le-temple-etait',
    excerpt:
      'Nous avons construit cette église et nous allons la rebâtir. C’est notre maison. À cause de cette maison, je suis ce que je suis. Pour l’amour de Moriah, je ne peux pas me taire.',
  }),
  t({
    id: 'tm-tshisuaka',
    name: 'Frère Joseph Tshisuaka',
    relation: 'Kinshasa, RDC',
    date: '2026-07-16',
    category: 'apres-incendie',
    excerpt: 'Romains 11:33-36 — Ô profondeur de la richesse, de la sagesse et de la science de Dieu !',
  }),
  t({
    id: 'tm-lys',
    name: 'Sœur Lys Bosenge',
    relation: 'Kinshasa, RDC',
    date: '2026-07-16',
    category: 'apres-incendie',
    excerpt: 'Puisse notre Dieu te soutenir davantage. Nous sommes derrière toi, vaillant homme de Dieu.',
  }),
  t({
    id: 'tm-eric',
    name: 'Eric Nlendi Le Divin',
    relation: 'Kinshasa, RDC',
    date: '2026-07-12',
    category: 'esperance',
    excerpt:
      '1 Corinthiens 15:58 — Ainsi, mes frères bien-aimés, soyez fermes, inébranlables, travaillant de mieux en mieux à l’œuvre du Seigneur.',
  }),
  t({
    id: 'tm-syndani',
    name: 'Sœur Syndani',
    relation: 'Shekinah Tabernacle, Kinshasa',
    date: '2026-07-12',
    category: 'apres-incendie',
    excerpt:
      'Les moments difficiles éprouvent notre foi, mais ils nous rappellent que Dieu demeure fidèle. Demeurons unis dans la foi, dans l’amour fraternel et dans la prière. Romains 8:28 ; Psaume 31:24.',
  }),
  t({
    id: 'tm-rachete',
    name: 'Frère Rachete Nsolani',
    relation: 'Kolwezi',
    date: '2026-07-12',
    category: 'esperance',
    excerpt:
      'Que le Seigneur console le cœur de son serviteur notre pasteur Richard Diyoka et les cœurs de toute l’Église. Avec l’aide de notre Dieu, nous allons reconstruire ce temple.',
  }),
  t({
    id: 'tm-monsengo',
    name: 'Frère Emmanuel Monsengo',
    relation: 'Bandundu',
    date: '2026-07-09',
    category: 'apres-incendie',
    excerpt:
      'Nous savons que toutes choses concourent au bien de ceux qui aiment Dieu. Nous ne cesserons jamais de prier pour notre église.',
  }),
  t({
    id: 'tm-dikatshidi',
    name: 'Frère Joseph Dikatshidi',
    relation: 'Kinshasa, RDC',
    date: '2026-07-08',
    category: 'apres-incendie',
    excerpt:
      'Aucun feu ne peut consumer les promesses de Dieu. « Quand tu traverseras le feu, tu ne te brûleras pas. » — Ésaïe 43:2-3. Nous croyons que la gloire de demain sera plus grande que les difficultés d’aujourd’hui.',
  }),
  t({
    id: 'tm-masala',
    name: 'Frère Marc Masala',
    relation: 'Kinshasa',
    date: '2026-06-28',
    category: 'esperance',
    excerpt:
      'Notre cœur est touché par cette épreuve, mais notre foi demeure ferme. Ésaïe 41:10. Lorsque nous rebâtirons notre église, que ce soit avec des cœurs purifiés et un engagement renouvelé.',
  }),
  t({
    id: 'tm-moises',
    name: 'Irmão Moisés Mateus',
    relation: 'Luanda, Angola',
    date: '2026-06-28',
    category: 'apres-incendie',
    excerpt: 'Que Deus continue abençoando nosso pastor, e possa lhe dar sempre força e coragem para conduzir o povo de Deus.',
  }),
  t({
    id: 'tm-constantin',
    name: 'Constantin Kabue',
    relation: 'Lyon, France',
    date: '2026-06-25',
    category: 'apres-incendie',
    excerpt:
      'Je suis profondément attristé par l’incendie de notre église. « Dieu est pour nous un refuge et un appui. » — Psaume 46:1. Que le Seigneur restaure ce qui a été perdu.',
  }),
  t({
    id: 'tm-lois',
    name: 'Sœur Loïs Nlemvo',
    relation: 'Kinshasa, RDC',
    date: '2026-06-25',
    category: 'apres-incendie',
    excerpt:
      'Le Seigneur ne nous donne jamais des épreuves au-dessus de nos forces. Que Joël 2:25 soit votre soutien. Nous vous aimons, cher pasteur, et prions beaucoup pour vous.',
  }),
  t({
    id: 'tm-prisca',
    name: 'Sœur Prisca Ngalula Mukanda',
    relation: 'Paris, France',
    date: '2026-06-25',
    category: 'esperance',
    excerpt:
      'Ce bâtiment était un lieu précieux, mais l’Église véritable, c’est nous. « Je vous remplacerai les années qu’ont dévorées la sauterelle. » — Joël 2:25. Dieu restaure, Dieu relève, Dieu renouvelle.',
  }),
  t({
    id: 'tm-gabriel',
    name: 'Brother Gabriel Mbaya',
    relation: 'Birmingham, Royaume-Uni',
    date: '2026-06-25',
    category: 'apres-incendie',
    excerpt:
      'Seeing the images of Moriah Temple engulfed in flames was an intensely traumatizing sight. « We are troubled on every side, yet not distressed. » — 2 Corinthians 4:8-9. This is not the end of the story of Moriah Temple.',
  }),
  t({
    id: 'tm-elshaddai',
    name: 'Frère Elshaddai Kapiamba',
    relation: 'Lualaba / Kolwezi',
    date: '2026-06-25',
    category: 'esperance',
    excerpt:
      'Après sa plus grande épreuve, Job dit : « Je sais que tu peux tout. » Que le Seigneur Jésus-Christ rétablisse son Église Shekinah Tabernacle, son serviteur le pasteur Diyoka, ainsi que toute l’assemblée.',
  }),
  t({
    id: 'tm-salima',
    name: 'Salima Sileki',
    relation: 'Kinshasa',
    date: '2026-06-24',
    category: 'ce-que-le-temple-etait',
    excerpt:
      'Ce fut un endroit où nous déposions nos fardeaux. Que cette épreuve nous forge, et qu’il console son serviteur notre pasteur Richard Diyoka.',
  }),
  t({
    id: 'tm-willy',
    name: 'Frère Willy Balanganayi',
    relation: 'Moanda, Kongo Central, RDC',
    date: '2026-06-23',
    category: 'esperance',
    excerpt:
      'C’était avec des larmes que j’ai reçu la nouvelle le dimanche 17 mai 2026. Je ne doute pas un instant que nous reconstruirons notre temple. Je ferai ma part pour que la gloire de ce nouveau temple soit plus grande.',
  }),
  t({
    id: 'tm-olivier',
    name: 'Frère Olivier',
    relation: 'Kasaï oriental',
    date: '2026-06-23',
    category: 'apres-incendie',
    excerpt:
      'Je tiens à compatir dans la dure épreuve qui a emporté une œuvre de huit années de construction. Je prie que Dieu vous fortifie et qu’il pourvoie au besoin.',
  }),
  t({
    id: 'tm-benjamin',
    name: 'Frère Benjamin Yengo',
    relation: 'Kinshasa, RDC',
    date: '2026-06-23',
    category: 'esperance',
    excerpt: 'Que l’Éternel te fortifie, révérend Richard Diyoka. Dieu a quelque chose qu’il fera plus que même l’ancien temple.',
  }),
  t({
    id: 'tm-asael',
    name: 'Frère Asael Yombo',
    relation: 'Kinshasa, RDC',
    date: '2026-06-23',
    category: 'apres-incendie',
    excerpt:
      'C’est Dieu qui amène des tensions dans l’église : chaque fils qui vient à Dieu doit être mis à l’épreuve. Soyez fortifié, très cher pasteur Richard Diyoka, et toute l’Église Shekinah Tabernacle.',
  }),
]

export const testimonials = sortChrono(testimonialList)

export const visitors = []
