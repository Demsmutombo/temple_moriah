<script setup>
import { computed } from 'vue'
import Modal from '@/components/common/Modal.vue'
import VideoPlayer from '@/components/video/VideoPlayer.vue'
import { displayVideo } from '@/composables/useYoutubeMeta'
import { videoCategoryLabel } from '@/data'

const props = defineProps({
  video: { type: Object, default: null },
})
const emit = defineEmits(['close'])

const shown = computed(() => (props.video ? displayVideo(props.video) : null))
const categoryName = computed(() => (shown.value ? videoCategoryLabel(shown.value.category) : ''))
</script>

<template>
  <Modal :open="Boolean(video)" :title="shown?.title || ''" wide @close="emit('close')">
    <div v-if="video && shown" class="space-y-4">
      <p v-if="categoryName || shown.displayDate" class="text-caption">
        {{ [categoryName, shown.displayDate, shown.speaker].filter(Boolean).join(' · ') }}
      </p>
      <VideoPlayer
        :key="video.id"
        :src="video.url"
        :youtube-id="video.youtubeId"
        :title="shown.title"
        autoplay
      />
    </div>
  </Modal>
</template>
