<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SplashScreen from '@/components/layout/SplashScreen.vue'
import InstallAppBanner from '@/components/layout/InstallAppBanner.vue'
import { youtubeVideos } from '@/data'
import { prefetchYoutubeMeta } from '@/composables/useYoutubeMeta'

const loadError = ref('')

router.onError(() => {
  loadError.value = 'Cette page n’a pas pu se charger. Vérifiez la connexion, puis réessayez.'
})
router.afterEach(() => {
  loadError.value = ''
})

onMounted(() => {
  prefetchYoutubeMeta(youtubeVideos)
})
</script>

<template>
  <SplashScreen />
  <InstallAppBanner />
  <p v-if="loadError" class="load-error" role="alert">{{ loadError }}</p>
  <DefaultLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </DefaultLayout>
</template>

<style scoped>
.load-error {
  position: sticky;
  top: 0;
  z-index: 80;
  margin: 0;
  padding: 0.7rem 1rem;
  text-align: center;
  font-size: 0.82rem;
  font-weight: 650;
  color: #fff;
  background: #3a7bc8;
}
</style>
