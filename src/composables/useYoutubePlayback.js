import { ref } from 'vue'

/** Un seul lecteur actif à la fois, pour rester dans la captation ouverte. */
export const activePlayerId = ref('')
