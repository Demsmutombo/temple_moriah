import { createRouter, createWebHistory } from 'vue-router'

function page(loader) {
  return () =>
    loader().catch(() =>
      new Promise((resolve, reject) => {
        window.setTimeout(() => loader().then(resolve, reject), 350)
      }),
    )
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: page(() => import('@/views/Home.vue')),
    meta: {
      title: 'Accueil',
      description: 'Histoire, mémoire et archives du Temple Moriah de Shekinah Tabernacle, Kinshasa.',
    },
  },
  {
    path: '/histoire',
    name: 'vision',
    component: page(() => import('@/views/Vision.vue')),
    meta: {
      title: 'La vision',
      description: 'Origine, vision et mission du Temple Moriah.',
    },
  },
  {
    path: '/construction',
    name: 'construction',
    component: page(() => import('@/views/Construction.vue')),
    meta: {
      title: 'La construction',
      description: 'Chronologie de la construction du Temple Moriah, 2011–2018.',
    },
  },
  {
    path: '/dedicace',
    name: 'dedication',
    component: page(() => import('@/views/Dedication.vue')),
    meta: {
      title: 'La dédicace',
      description: 'Dédicace du Temple Moriah en 2018.',
    },
  },
  {
    path: '/vie-du-temple',
    name: 'temple-life',
    component: page(() => import('@/views/TempleLife.vue')),
    meta: {
      title: 'La vie du Temple',
      description: 'Cultes, événements et archives de la vie du Temple Moriah, 2018–2026.',
    },
  },
  {
    path: '/epreuve',
    name: 'fire',
    component: page(() => import('@/views/Fire.vue')),
    meta: {
      title: 'Le 17 mai 2026',
      description: 'Récit documentaire de l’incendie du Temple Moriah, le 17 mai 2026.',
    },
  },
  {
    path: '/apres-incendie',
    name: 'after-fire',
    component: page(() => import('@/views/AfterFire.vue')),
    meta: {
      title: 'Après l’incendie',
      description: 'Les jours qui ont suivi l’incendie, et le culte à ciel ouvert du 24 mai 2026.',
    },
  },
  {
    path: '/consolation',
    name: 'consolation',
    component: page(() => import('@/views/Consolation.vue')),
    meta: {
      title: 'Ils sont venus nous consoler',
      description: 'Personnes et délégations venues soutenir Shekinah Tabernacle après l’incendie.',
    },
  },
  {
    path: '/voix',
    name: 'voices',
    component: page(() => import('@/views/Voices.vue')),
    meta: {
      title: 'Les voix du Temple',
      description: 'Paroles, témoignages et messages liés à l’histoire du Temple Moriah.',
    },
  },
  {
    path: '/voix/pasteur',
    name: 'pastor-messages',
    component: page(() => import('@/views/PastorMessages.vue')),
    meta: {
      title: 'Paroles du pasteur',
      description: 'Archives des interventions du pasteur Richard Diyoka.',
    },
  },
  {
    path: '/voix/pasteur/:id',
    name: 'pastor-message',
    component: page(() => import('@/views/PastorMessageDetail.vue')),
    meta: {
      title: 'Parole du pasteur',
      description: 'Archive d’une intervention du pasteur Richard Diyoka.',
    },
  },
  {
    path: '/voix/temoignages',
    name: 'testimonials',
    component: page(() => import('@/views/Testimonials.vue')),
    meta: {
      title: 'Témoignages',
      description: 'Bibliothèque de témoignages liés au Temple Moriah.',
    },
  },
  {
    path: '/voix/visiteurs',
    name: 'visitors',
    component: page(() => import('@/views/Visitors.vue')),
    meta: {
      title: 'Visiteurs',
      description: 'Archives des visiteurs du Temple Moriah.',
    },
  },
  {
    path: '/archives',
    name: 'archives',
    component: page(() => import('@/views/Archives.vue')),
    meta: {
      title: 'Archives',
      description: 'Photographies, vidéos, documents et discours du Temple Moriah.',
    },
  },
  {
    path: '/archives/:id',
    name: 'document',
    component: page(() => import('@/views/DocumentView.vue')),
    meta: {
      title: 'Document',
      description: 'Lecture d’un document d’archive du Temple Moriah.',
    },
  },
  {
    path: '/galerie',
    name: 'gallery',
    component: page(() => import('@/views/Gallery.vue')),
    meta: {
      title: 'Galerie photographique',
      description: 'Galerie professionnelle des archives photographiques du Temple Moriah.',
    },
  },
  {
    path: '/videos',
    redirect: '/mediatheque',
  },
  {
    path: '/videos/:id',
    redirect: (to) => `/mediatheque/${to.params.id}`,
  },
  {
    path: '/mediatheque',
    name: 'videos',
    component: page(() => import('@/views/Videos.vue')),
    meta: {
      title: 'Médiathèque',
      description: 'Bibliothèque vidéo du Temple Moriah.',
    },
  },
  {
    path: '/mediatheque/:id',
    name: 'video-detail',
    component: page(() => import('@/views/VideoDetail.vue')),
    meta: {
      title: 'Vidéo',
      description: 'Archive vidéo du Temple Moriah.',
    },
  },
  {
    path: '/livre-de-memoire',
    name: 'memory-book',
    component: page(() => import('@/views/MemoryBook.vue')),
    meta: {
      title: 'Livre de mémoire',
      description: 'Laisser un message et un souvenir concernant le Temple Moriah.',
    },
  },
  {
    path: '/reconstruction',
    name: 'reconstruction',
    component: page(() => import('@/views/Reconstruction.vue')),
    meta: {
      title: 'Reconstruction',
      description: 'Le nouveau chapitre de l’histoire du Temple Moriah.',
    },
  },
  {
    path: '/a-propos',
    name: 'about',
    component: page(() => import('@/views/About.vue')),
    meta: {
      title: 'À propos',
      description: 'Pourquoi cette plateforme existe : se souvenir, transmettre, et garder la mémoire du Temple Moriah. Contact du développeur Israel Mutombo IM.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: page(() => import('@/views/NotFound.vue')),
    meta: { title: 'Page introuvable' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (typeof document !== 'undefined') {
      const main = document.getElementById('contenu')
      const mobile = window.matchMedia('(max-width: 1023px)').matches
      if (main && mobile) {
        requestAnimationFrame(() => {
          if (to.hash) document.querySelector(to.hash)?.scrollIntoView({ block: 'start' })
          else main.scrollTop = 0
        })
        return
      }
    }
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})

export default router
