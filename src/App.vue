<script setup>
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SplashScreen from '@/components/layout/SplashScreen.vue'
import InstallAppBanner from '@/components/layout/InstallAppBanner.vue'
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
