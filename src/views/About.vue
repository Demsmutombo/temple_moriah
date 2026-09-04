<script setup>
import PageHero from '@/components/layout/PageHero.vue'
import MobileSectionHead from '@/components/layout/MobileSectionHead.vue'
import QuoteBlock from '@/components/common/QuoteBlock.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
import { biblicalReferences, site } from '@/data'

const ps122 = biblicalReferences.find((b) => b.id === 'ps122')
const neh = biblicalReferences.find((b) => b.id === 'neh2')
const hag = biblicalReferences.find((b) => b.id === 'hag1')
const ch29 = biblicalReferences.find((b) => b.id === 'ch29')

const sections = [
  {
    title: 'Pourquoi cette plateforme existe',
    paragraphs: [
      `Temple Moriah n’est pas un site d’actualité, ni une vitrine. C’est une maison de mémoire pour le Temple Moriah de ${site.church}, à ${site.city} : un lieu où l’histoire, les photographies, les vidéos, les témoignages et les documents restent accessibles, afin qu’un édifice puisse être atteint sans que le récit disparaisse.`,
      'L’Écriture ne traite jamais la maison de Dieu comme un simple bâtiment. Elle en fait un lieu de rendez-vous, de joie, de deuil, de transmission et de reconstruction. Cette plateforme se tient dans cette ligne : se souvenir, écrire, montrer, et transmettre — sans inventer ce qui n’est pas établi.',
    ],
  },
  {
    title: 'Le nom Moriah',
    paragraphs: [
      'Le nom Moriah n’est pas un ornement. Dans la Genèse, c’est le mont où Abraham se tint, et où il reconnut que l’Éternel pourvoit. Dans les Chroniques, c’est aussi le lieu où Salomon bâtit la maison de l’Éternel. Sur cette plateforme, ce nom n’est pas commenté au-delà de ce que l’église elle-même documentera. Il suffit de dire ceci : un temple appelé Moriah porte déjà, dans l’Écriture, la tension entre l’épreuve, la provision et la maison.',
    ],
    quotes: [
      {
        text: 'Abraham donna à ce lieu le nom de l’Éternel-Jiré. C’est pourquoi l’on dit aujourd’hui : À la montagne de l’Éternel il sera pourvu.',
        attribution: 'Genèse 22:14',
      },
      {
        text: 'Salomon commença de bâtir la maison de l’Éternel à Jérusalem, sur la montagne de Morija.',
        attribution: '2 Chroniques 3:1',
      },
    ],
  },
  {
    title: 'Écrire la vision, afin qu’on la lise',
    paragraphs: [
      'Une mémoire orale s’efface. Une vision non écrite se trouble. Le prophète Habakuk reçoit l’ordre d’écrire, non pour archiver par vanité, mais pour que la vision reste lisible, courante, transmissible. C’est la première justification de cette plateforme : graver ce qui a été vu, bâti, célébré, puis éprouvé, afin que la génération suivante ne dépende pas de la rumeur.',
    ],
    quotes: [
      {
        text: 'Écris la vision, et grave-la sur des tables, afin qu’on la lise couramment.',
        attribution: 'Habakuk 2:2',
      },
    ],
  },
  {
    title: 'Des pierres de souvenir',
    paragraphs: [
      'Quand Israël traversa le Jourdain, l’Éternel ne demanda pas seulement un miracle : il demanda des pierres. Non pour décorer, mais pour répondre à la question des enfants : « Que signifient ces pierres ? » Une photographie, une vidéo, un document, un témoignage tiennent ici le même office. Ils ne remplacent pas le Temple. Ils empêchent que le passage soit oublié.',
    ],
    quotes: [
      {
        text: 'Lorsque vos enfants demanderont un jour : Que signifient pour vous ces pierres ? vous leur direz : C’est que les eaux du Jourdain ont été coupées devant l’arche de l’alliance de l’Éternel. Ces pierres serviront de souvenir aux enfants d’Israël pour toujours.',
        attribution: 'Josué 4:6-7',
      },
    ],
  },
  {
    title: 'Un livre de souvenir',
    paragraphs: [
      'Malachie parle d’un livre de souvenir écrit devant l’Éternel, pour ceux qui le craignent et qui pensent à son nom. Le Livre de mémoire de cette plateforme n’est pas ce livre céleste. Mais il en emprunte l’exigence : ne pas laisser sans trace les paroles, les larmes et les actions de grâce liées à cette maison. Se souvenir n’est pas une option pieuse. C’est un acte d’obéissance à la transmission.',
    ],
    quotes: [
      {
        text: 'Alors ceux qui craignent l’Éternel se parlèrent l’un à l’autre ; l’Éternel fut attentif, et il écouta, et un livre de souvenir fut écrit devant lui pour ceux qui craignent l’Éternel et qui honorent son nom.',
        attribution: 'Malachie 3:16',
      },
    ],
  },
  {
    title: 'Afin que la génération future sache',
    paragraphs: [
      'Le Psaume 78 refuse le silence. Ce que le Seigneur a fait, on ne le cache pas aux enfants. On le raconte, pour qu’ils mettent en Dieu leur confiance. Deutéronome va plus loin : les paroles doivent être inculquées, répétées à la maison, en chemin, au coucher, au lever. Une plateforme mémorielle n’est donc pas un luxe numérique. C’est une manière contemporaine de ne pas cacher aux enfants la maison, la vision, le chantier, la dédicace, l’épreuve et l’élan de rebâtir.',
    ],
    quotes: [
      {
        text: 'Nous ne les cacherons point à leurs enfants ; nous dirons à la génération future les louanges de l’Éternel, et sa puissance, et les prodiges qu’il a opérés.',
        attribution: 'Psaume 78:4',
      },
      {
        text: 'Et ces commandements, que je te donne aujourd’hui, seront dans ton cœur. Tu les inculqueras à tes enfants, et tu en parleras quand tu seras dans ta maison, quand tu iras en voyage, quand tu te coucheras et quand tu te lèveras.',
        attribution: 'Deutéronome 6:6-7',
      },
    ],
  },
  {
    title: 'La joie d’aller à la maison',
    paragraphs: [
      'Avant l’épreuve, il y a la joie. Le site officiel de Shekinah Tabernacle associe la dédicace du Temple Moriah, en 2018, au Psaume 122. Cette plateforme garde ce verset à sa place : non comme décor, mais comme mémoire d’un peuple qui s’est réjoui d’entrer dans la maison de l’Éternel. Oublier cette joie, ce serait réduire le Temple à sa ruine.',
    ],
    quotes: [
      {
        text: ps122?.text,
        attribution: ps122?.reference,
        note: ps122?.context,
      },
    ],
  },
  {
    title: 'Quand le sanctuaire est atteint',
    paragraphs: [
      'Le 17 mai 2026, le Temple Moriah a été ravagé par un incendie. Sur le site officiel, ce jour est associé aux Lamentations et à Ésaïe 64. L’Écriture connaît déjà le langage de la maison sainte livrée aux flammes, et celui d’un peuple qui ne peut pas faire comme si rien n’était arrivé. Cette plateforme ne dramatise pas au-delà des faits. Elle refuse aussi l’effacement. Pleurer la maison, c’est encore l’honorer.',
    ],
    quotes: [
      {
        text: 'Ta maison sainte et glorieuse, où nos pères te célébraient, a été consumée par le feu ; tout ce que nous avions de précieux a été dévasté.',
        attribution: 'Ésaïe 64:11',
        note: 'Texte associé, sur le site officiel, à la mémoire du 17 mai 2026.',
      },
      {
        text: 'Les anciens de la fille de Sion sont assis à terre, ils sont muets ; ils ont répandu de la poussière sur leur tête, ils se sont ceints de sacs.',
        attribution: 'Lamentations 2:10',
        note: 'Les Lamentations 2:1-3, 6-8, 11 sont associées, officiellement, à la page du Temple Moriah le 17 mai 2026.',
      },
    ],
  },
  {
    title: 'Se lever, et bâtir',
    paragraphs: [
      'La mémoire biblique ne s’arrête pas à la cendre. Néhémie voit les ruines et dit : levons-nous, et bâtissons. Aggée rappelle de considérer les voies, de monter, d’apporter, de bâtir la maison. David, dans les Chroniques, refuse de présenter l’offrande comme un droit : qui suis-je, pour donner ainsi ? Ces paroles, déjà associées à la reconstruction du Temple Moriah, fondent le dernier mouvement de la plateforme : documenter l’élan de rebâtir, sans le transformer en slogan vide.',
    ],
    quotes: [
      {
        text: neh?.text,
        attribution: neh?.reference,
        note: neh?.context,
      },
      {
        text: hag?.text,
        attribution: hag?.reference,
        note: hag?.context,
      },
      {
        text: ch29?.text,
        attribution: ch29?.reference,
        note: ch29?.context,
      },
    ],
  },
  {
    title: 'Ce que cette maison de mémoire rassemble',
    paragraphs: [
      'Concrètement, la plateforme tient ensemble le fil du récit : la vision, la construction (2011–2018), la dédicace, la vie du Temple, le 17 mai 2026, les jours qui ont suivi, la consolation, les paroles, les témoignages, les archives, la médiathèque, et le chapitre ouvert de la reconstruction.',
      'Elle le fait avec une règle unique, elle aussi biblique dans son esprit : « que votre oui soit oui ». Les faits sont des faits. Les paroles sont des paroles. Les témoignages restent des témoignages. Les citations bibliques sont nommées comme telles. Ce qui n’est pas établi n’est pas inventé. Une mémoire fidèle vaut mieux qu’un récit trop complet.',
    ],
    quotes: [
      {
        text: 'Que votre oui soit oui, et que votre non soit non, afin que vous ne tombiez pas sous le jugement.',
        attribution: 'Jacques 5:12',
      },
    ],
  },
]

const contacts = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: site.developer.phoneDisplay,
    href: site.developer.whatsapp,
    external: true,
  },
  {
    id: 'phone',
    label: 'Téléphone',
    value: site.developer.phoneDisplay,
    href: site.developer.tel,
    external: false,
  },
  {
    id: 'email',
    label: 'E-mail',
    value: site.developer.email,
    href: site.developer.mailto,
    external: false,
  },
]
</script>

<template>
  <div>
    <PageHero
      title="À propos"
      subtitle="Se souvenir, écrire, transmettre. Une plateforme mémorielle fondée sur l’Écriture, pour que la maison de l’Éternel ne disparaisse pas de la mémoire des enfants."
    />

    <div class="about-wrap">
      <div class="lg:hidden">
        <MobileSectionHead title="À propos" />
      </div>

      <article class="about-story">
        <section v-for="s in sections" :key="s.title" class="about-section">
          <ScrollReveal>
            <h2>{{ s.title }}</h2>
            <p v-for="(p, i) in s.paragraphs" :key="i">{{ p }}</p>
            <QuoteBlock
              v-for="q in (s.quotes || []).filter((q) => q.text)"
              :key="q.attribution"
              :text="q.text"
              :attribution="q.attribution"
              :note="q.note"
              kind="citation_biblique"
            />
          </ScrollReveal>
        </section>

        <section class="about-section">
          <ScrollReveal>
            <h2>Le développeur</h2>
            <p>
              Cette plateforme a été conçue et développée par <strong>{{ site.developer.name }}</strong>,
              pour que la mémoire du Temple Moriah reste lisible, partageable et fidèle aux sources.
            </p>
            <ul class="contact-list">
              <li v-for="c in contacts" :key="c.id">
                <a
                  class="contact-row"
                  :href="c.href"
                  :target="c.external ? '_blank' : undefined"
                  :rel="c.external ? 'noopener noreferrer' : undefined"
                >
                  <span class="contact-icon" aria-hidden="true">
                    <svg v-if="c.id === 'whatsapp'" viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <path
                        d="M12.04 2.5A9.45 9.45 0 0 0 2.6 11.9c0 1.67.44 3.3 1.27 4.74L2.5 21.5l5.02-1.32a9.5 9.5 0 0 0 4.52 1.15h.01A9.45 9.45 0 0 0 21.5 11.9 9.45 9.45 0 0 0 12.04 2.5Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                      />
                      <path
                        d="M8.7 7.85c-.2-.44-.41-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.25.28-.94.91-.94 2.23 0 1.31.96 2.58 1.09 2.76.14.18 1.88 2.88 4.56 4.03.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.27.23-.62.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.26-.14-1.13-.42-2.15-1.33-.8-.7-1.33-1.58-1.49-1.85-.15-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.15.18-.27.27-.45.09-.18.04-.33-.02-.47Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg v-else-if="c.id === 'phone'" viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <path
                        d="M7.2 3.8h2.1c.4 0 .8.27.9.66l.7 2.3c.1.34 0 .7-.27.95l-1.3 1.2a12.4 12.4 0 0 0 5.16 5.16l1.2-1.3c.24-.26.61-.37.95-.27l2.3.7c.39.12.66.5.66.9v2.1c0 .9-.76 1.62-1.66 1.55A15.7 15.7 0 0 1 3.65 5.46C3.58 4.56 4.3 3.8 5.2 3.8h2Z"
                        stroke="currentColor"
                        stroke-width="1.7"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none">
                      <rect x="3.4" y="5.4" width="17.2" height="13.2" rx="2.2" stroke="currentColor" stroke-width="1.7" />
                      <path d="M4.2 7.1 12 12.4 19.8 7.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span class="contact-copy">
                    <span class="contact-label">{{ c.label }}</span>
                    <span class="contact-value">{{ c.value }}</span>
                  </span>
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </section>
      </article>
    </div>
  </div>
</template>

<style scoped>
.about-wrap {
  width: 100%;
  max-width: 48rem;
  margin-inline: auto;
  padding: 0.2rem 1.1rem 1.6rem;
}
.about-section + .about-section {
  margin-top: 1.6rem;
}
.about-section h2 {
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.about-section p {
  margin: 0 0 0.85rem;
  line-height: 1.65;
  color: var(--color-ink-soft);
}
.about-section p strong {
  color: var(--color-ink);
  font-weight: 700;
}
.about-section :deep(.quote-block) {
  margin: 0.9rem 0 1.1rem;
  padding: 1.15rem 1.1rem;
}
.about-section :deep(.quote-block p) {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.45;
  color: var(--color-ink);
}
.contact-list {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 0.95rem;
  border-radius: 20px;
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
  text-decoration: none;
  color: inherit;
}
.contact-icon {
  flex-shrink: 0;
  width: 2.7rem;
  height: 2.7rem;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: var(--neu-blue);
  background: var(--neu-bg);
  box-shadow: var(--neu-raised-sm);
}
.contact-copy {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
  min-width: 0;
}
.contact-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
}
.contact-value {
  font-weight: 650;
  letter-spacing: -0.02em;
  word-break: break-word;
}
@media (min-width: 1024px) {
  .about-wrap {
    padding: 1rem 1.25rem 5rem;
  }
  .about-section + .about-section {
    margin-top: 2.6rem;
  }
  .about-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .about-section p {
    font-size: 1.05rem;
    line-height: 1.7;
  }
  .about-section :deep(.quote-block) {
    padding: 1.6rem 1.5rem;
  }
  .about-section :deep(.quote-block p) {
    font-size: 1.35rem;
  }
}
</style>
