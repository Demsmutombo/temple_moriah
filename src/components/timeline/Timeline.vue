<script setup>
import { computed, ref, watch } from 'vue'
import TimelineItem from './TimelineItem.vue'
import KindBadge from '@/components/common/KindBadge.vue'
import EmptyArchive from '@/components/common/EmptyArchive.vue'

const props = defineProps({
  events: { type: Array, required: true },
})

const selectedId = ref(props.events[0]?.id || null)
const selected = computed(() => props.events.find((e) => e.id === selectedId.value) || props.events[0])

watch(
  () => props.events,
  (list) => {
    if (!list.find((e) => e.id === selectedId.value)) selectedId.value = list[0]?.id || null
  },
)
</script>

<template>
  <div class="timeline-wrap">
    <ol class="timeline">
      <TimelineItem
        v-for="event in events"
        :key="event.id"
        :event="event"
        :active="event.id === selectedId"
        @select="selectedId = event.id"
      />
    </ol>
    <article v-if="selected" class="timeline-panel" :aria-live="selected ? 'polite' : undefined">
      <p class="text-meta text-gold mb-3">{{ selected.displayDate }}</p>
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <h3 class="font-display text-3xl md:text-4xl">{{ selected.title }}</h3>
        <KindBadge :kind="selected.kind" />
      </div>
      <p class="text-ink-soft leading-relaxed max-w-2xl">{{ selected.description }}</p>
      <div v-if="selected.people?.length" class="mt-6 text-caption">
        Personnes : {{ selected.people.join(', ') }}
      </div>
      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <EmptyArchive v-if="!selected.image" title="Photographies" text="Les images de cet événement n’ont pas encore été versées." />
        <EmptyArchive v-if="!selected.video" title="Vidéos" text="Aucune captation n’est encore associée à cette date." />
      </div>
      <RouterLink v-if="selected.path" :to="selected.path" class="neu-btn mt-8">
        Lire le chapitre
      </RouterLink>
    </article>
  </div>
</template>

<style scoped>
.timeline-wrap {
  display: grid;
  gap: 2.5rem;
}
.timeline {
  position: relative;
  padding-left: 0;
}
.timeline::before {
  display: none;
}
@media (min-width: 1024px) {
  .timeline-wrap {
    grid-template-columns: 280px 1fr;
    gap: 4rem;
    align-items: start;
  }
}
.timeline-panel {
  background: var(--neu-bg);
  box-shadow: var(--neu-raised);
  border-radius: 28px;
  padding: 1.5rem;
}
@media (min-width: 1024px) {
  .timeline-panel {
    position: sticky;
    top: 7rem;
  }
}
</style>
