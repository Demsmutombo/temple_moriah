/**
 * Registre de provenance.
 * Une information historique doit pouvoir pointer vers une ou plusieurs sources.
 * type : official | secondary | community | to_confirm
 */

export const sources = [
  {
    id: 'source-shekinah',
    type: 'official',
    title: 'Shekinah Tabernacle — site officiel',
    url: 'https://shekinahgospel.org/',
    date: '',
    accessedAt: '2026-09-03',
    notes: 'Source principale pour l’identité de l’assemblée et les pages institutionnelles.',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-donation',
    type: 'official',
    title: 'Projet officiel de reconstruction',
    url: 'https://donation.shekinahgospel.org/',
    date: '',
    accessedAt: '2026-09-03',
    notes: 'Plateforme officielle de soutien à la reconstruction. Cette archive n’héberge aucun paiement.',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-photos',
    type: 'official',
    title: 'Galerie photographique officielle',
    url: 'https://shekinahgospel.org/multimedia/photo',
    date: '',
    accessedAt: '2026-09-03',
    notes: 'Album officiel. Les images doivent être versées avec crédit, pas recopiées sans cadre.',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-archives',
    type: 'official',
    title: 'Archives officielles Shekinah',
    url: 'https://shekinahgospel.org/archives/',
    date: '',
    accessedAt: '2026-09-03',
    notes: '',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-pastor-pdf',
    type: 'official',
    title: 'Message du pasteur (PDF officiel)',
    url: 'https://donation.shekinahgospel.org/assets/pastor-message.pdf',
    date: '',
    accessedAt: '2026-09-03',
    notes: 'Document source. Ne pas recopier le texte intégral dans le code.',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-dedicace-sermon',
    type: 'official',
    title: 'Dédicace Moriah 2018 — prédication associée',
    url: 'https://shekinahgospel.org/sermon/1109904810',
    date: '2018',
    accessedAt: '2026-09-03',
    notes: 'Référence officielle liée à la dédicace. Titre exact à relier depuis la page source.',
    rights: 'Shekinah Tabernacle',
  },
  {
    id: 'source-offrandes-rebâtir',
    type: 'official',
    title: 'Offrandes pour rebâtir le Temple Moriah',
    url: 'https://shekinahgospel.org/sermon/1110754827',
    date: '2026',
    accessedAt: '2026-09-03',
    notes: 'Prédication officielle associée à l’appel à reconstruire.',
    rights: 'Shekinah Tabernacle',
  },
]

export const sourceTypeLabels = {
  official: 'Source officielle',
  secondary: 'Source externe',
  community: 'Témoignage communautaire',
  to_confirm: 'Information à confirmer',
}
