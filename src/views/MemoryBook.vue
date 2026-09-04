<script setup>
import { computed, reactive, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import EditorialIntro from '@/components/common/EditorialIntro.vue'
import MemoryCard from '@/components/testimony/MemoryCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import SearchBar from '@/components/common/SearchBar.vue'
import { useMemoryBook } from '@/composables/useMemoryBook'

const { published, addEntry } = useMemoryBook()
const sent = ref(false)
const query = ref('')
const form = reactive({
  name: '',
  place: '',
  message: '',
  souvenir: '',
})

const visible = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return published.value
  return published.value.filter((e) => `${e.name} ${e.place} ${e.message} ${e.souvenir}`.toLowerCase().includes(q))
})

function onSubmit() {
  if (!form.name.trim() || !form.message.trim()) return
  addEntry(form)
  form.name = ''
  form.place = ''
  form.message = ''
  form.souvenir = ''
  sent.value = true
}
</script>

<template>
  <div>
    <PageHero
      title="Livre de mémoire"
      subtitle="Laissez une trace dans la mémoire du Temple."
    />
    <section class="page-body grid gap-6 lg:gap-12">
      <EditorialIntro
        text="Ce livre recueille des messages personnels. En version 1, ils sont enregistrés sur cet appareil, avec le statut « en attente de modération ». Ils ne sont pas envoyés automatiquement au site de l’Église : aucune API publique n’est utilisée ici. Un administrateur pourra plus tard valider, puis publier."
      />
      <form class="neu-card-lg space-y-5 lg:space-y-6" @submit.prevent="onSubmit">
        <p v-if="sent" class="text-caption">Votre message a été enregistré avec le statut « en attente de modération ».</p>
        <label class="block">
          <span class="text-meta">Nom</span>
          <input v-model="form.name" required class="field" />
        </label>
        <label class="block">
          <span class="text-meta">Ville / pays</span>
          <input v-model="form.place" class="field" />
        </label>
        <label class="block">
          <span class="text-meta">Message</span>
          <textarea v-model="form.message" required rows="5" class="field" />
        </label>
        <label class="block">
          <span class="text-meta">Souvenir</span>
          <textarea v-model="form.souvenir" rows="3" class="field" />
        </label>
        <p class="text-caption">Photographie facultative : le dépôt de fichier sera branché lors de la connexion à l’administration.</p>
        <button type="submit" class="neu-btn-primary">Déposer dans le livre</button>
      </form>

      <div>
        <h2 class="font-display text-lg lg:text-3xl mb-2 lg:mb-4">Pages déjà ouvertes</h2>
        <p class="editorial-lead">Les messages approuvés, et ceux encore en attente sur cet appareil.</p>
        <SearchBar v-model="query" placeholder="Rechercher un message" class="mb-4" />
        <MemoryCard v-for="entry in visible" :key="entry.id" :entry="entry" />
        <EmptyArchive v-if="!visible.length" title="Le livre est encore blanc" text="Les premiers messages apparaîtront ici, en attente de modération." />
      </div>
    </section>
  </div>
</template>

<style scoped>
.field {
  display: block;
  width: 100%;
  margin-top: 0.45rem;
  background: var(--neu-bg);
  border: 0;
  border-radius: 18px;
  box-shadow: var(--neu-inset);
  padding: 0.9rem 1.1rem;
  font-size: 1rem;
  color: var(--color-ink);
}
.field:focus {
  outline: none;
}
</style>
