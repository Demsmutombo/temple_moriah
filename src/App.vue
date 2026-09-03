<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SplashScreen from '@/components/layout/SplashScreen.vue'
import InstallAppBanner from '@/components/layout/InstallAppBanner.vue'
import { youtubeVideos } from '@/data'
import { prefetchYoutubeMeta } from '@/composables/useYoutubeMeta'

onMounted(() => {
  prefetchYoutubeMeta(youtubeVideos)
})
</script>

<template>
  <SplashScreen />
  <InstallAppBanner />
  <DefaultLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </DefaultLayout>
</template>
