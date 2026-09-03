<script setup>
import { reactive, ref } from 'vue'
import PageHero from '@/components/layout/PageHero.vue'
import MemoryCard from '@/components/testimony/MemoryCard.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'
import { useMemoryBook } from '@/composables/useMemoryBook'

const { published, addEntry } = useMemoryBook()
const sent = ref(false)
const form = reactive({
  name: '',
  place: '',
  message: '',
  souvenir: '',
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
      subtitle="Laisser un message concernant le Temple. En version 1, les contributions sont enregistrées localement, avec un statut de modération, en vue d’une future validation par un administrateur."
    />
    <section class="mx-auto max-w-3xl px-4 lg:px-5 py-4 lg:py-16 grid gap-6 lg:gap-16">
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
        <h2 class="font-display text-lg lg:text-3xl mb-4 lg:mb-6">Pages déjà ouvertes</h2>
        <MemoryCard v-for="entry in published" :key="entry.id" :entry="entry" />
        <EmptyArchive v-if="!published.length" title="Le livre est encore blanc" text="Les premiers messages apparaîtront ici, en attente de modération." />
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
