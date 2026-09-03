import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'Accueil',
      description: 'Histoire, mémoire et archives du Temple Moriah de Shekinah Tabernacle, Kinshasa.',
    },
  },
  {
    path: '/histoire',
    name: 'vision',
    component: () => import('@/views/Vision.vue'),
    meta: {
      title: 'La vision',
      description: 'Origine, vision et mission du Temple Moriah.',
    },
  },
  {
    path: '/construction',
    name: 'construction',
    component: () => import('@/views/Construction.vue'),
    meta: {
      title: 'La construction',
      description: 'Chronologie de la construction du Temple Moriah, 2011–2018.',
    },
  },
  {
    path: '/dedicace',
    name: 'dedication',
    component: () => import('@/views/Dedication.vue'),
    meta: {
      title: 'La dédicace',
      description: 'Dédicace du Temple Moriah en 2018.',
    },
  },
  {
    path: '/vie-du-temple',
    name: 'temple-life',
    component: () => import('@/views/TempleLife.vue'),
    meta: {
      title: 'La vie du Temple',
      description: 'Cultes, événements et archives de la vie du Temple Moriah, 2018–2026.',
    },
  },
  {
    path: '/epreuve',
    name: 'fire',
    component: () => import('@/views/Fire.vue'),
    meta: {
      title: 'Le 17 mai 2026',
      description: 'Récit documentaire de l’incendie du Temple Moriah, le 17 mai 2026.',
    },
  },
  {
    path: '/apres-incendie',
    name: 'after-fire',
    component: () => import('@/views/AfterFire.vue'),
    meta: {
      title: 'Après l’incendie',
      description: 'Les jours qui ont suivi l’incendie, et le culte à ciel ouvert du 24 mai 2026.',
    },
  },
  {
    path: '/consolation',
    name: 'consolation',
    component: () => import('@/views/Consolation.vue'),
    meta: {
      title: 'Ils sont venus nous consoler',
      description: 'Personnes et délégations venues soutenir Shekinah Tabernacle après l’incendie.',
    },
  },
  {
    path: '/voix',
    name: 'voices',
    component: () => import('@/views/Voices.vue'),
    meta: {
      title: 'Les voix du Temple',
      description: 'Paroles, témoignages et messages liés à l’histoire du Temple Moriah.',
    },
  },
  {
    path: '/voix/pasteur',
    name: 'pastor-messages',
    component: () => import('@/views/PastorMessages.vue'),
    meta: {
      title: 'Paroles du pasteur',
      description: 'Archives des interventions du pasteur Richard Diyoka.',
    },
  },
  {
    path: '/voix/pasteur/:id',
    name: 'pastor-message',
    component: () => import('@/views/PastorMessageDetail.vue'),
    meta: {
      title: 'Parole du pasteur',
      description: 'Archive d’une intervention du pasteur Richard Diyoka.',
    },
  },
  {
    path: '/voix/temoignages',
    name: 'testimonials',
    component: () => import('@/views/Testimonials.vue'),
    meta: {
      title: 'Témoignages',
      description: 'Bibliothèque de témoignages liés au Temple Moriah.',
    },
  },
  {
    path: '/voix/visiteurs',
    name: 'visitors',
    component: () => import('@/views/Visitors.vue'),
    meta: {
      title: 'Visiteurs',
      description: 'Archives des visiteurs du Temple Moriah.',
    },
  },
  {
    path: '/archives',
    name: 'archives',
    component: () => import('@/views/Archives.vue'),
    meta: {
      title: 'Archives',
      description: 'Photographies, vidéos, documents et discours du Temple Moriah.',
    },
  },
  {
    path: '/galerie',
    name: 'gallery',
    component: () => import('@/views/Gallery.vue'),
    meta: {
      title: 'Galerie photographique',
      description: 'Galerie professionnelle des archives photographiques du Temple Moriah.',
    },
  },
  {
    path: '/mediatheque',
    name: 'videos',
    component: () => import('@/views/Videos.vue'),
    meta: {
      title: 'Médiathèque',
      description: 'Bibliothèque vidéo du Temple Moriah.',
    },
  },
  {
    path: '/mediatheque/:id',
    name: 'video-detail',
    component: () => import('@/views/VideoDetail.vue'),
    meta: {
      title: 'Vidéo',
      description: 'Archive vidéo du Temple Moriah.',
    },
  },
  {
    path: '/livre-de-memoire',
    name: 'memory-book',
    component: () => import('@/views/MemoryBook.vue'),
    meta: {
      title: 'Livre de mémoire',
      description: 'Laisser un message et un souvenir concernant le Temple Moriah.',
    },
  },
  {
    path: '/reconstruction',
    name: 'reconstruction',
    component: () => import('@/views/Reconstruction.vue'),
    meta: {
      title: 'Reconstruction',
      description: 'Le nouveau chapitre de l’histoire du Temple Moriah.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page introuvable' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
