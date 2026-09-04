<script setup>
defineProps({
  title: { type: String, default: '' },
  companion: { type: Object, default: null },
})
</script>

<template>
  <header v-if="title || companion" class="media-lead">
    <p v-if="companion?.years" class="media-years">{{ companion.years }}</p>
    <h2 v-if="title" class="media-title">{{ title }}</h2>
    <p v-if="companion?.comment" class="media-comment">{{ companion.comment }}</p>
    <blockquote v-if="companion?.word?.text" class="media-word">
      <p>« {{ companion.word.text }} »</p>
      <cite v-if="companion.word.attribution">{{ companion.word.attribution }}</cite>
    </blockquote>
  </header>
</template>

<style scoped>
.media-lead {
  margin: 0 0 0.85rem;
}
.media-years {
  margin: 0 0 0.2rem;
  font-size: 0.68rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--neu-blue);
}
.media-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}
.media-comment {
  margin: 0.4rem 0 0;
  font-size: 0.86rem;
  line-height: 1.45;
  color: var(--color-ink-soft);
}
.media-word {
  margin: 0.7rem 0 0;
  padding: 0.85rem 1rem;
  border-radius: 16px;
  background: var(--neu-bg);
  box-shadow: var(--neu-inset);
}
.media-word p {
  margin: 0;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-style: italic;
  line-height: 1.4;
}
.media-word cite {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.68rem;
  font-style: normal;
  font-weight: 650;
  letter-spacing: 0.04em;
  color: var(--neu-blue);
}
@media (min-width: 1024px) {
  .media-lead {
    margin-bottom: 1.15rem;
  }
  .media-title {
    font-size: 1.45rem;
  }
  .media-comment {
    max-width: 36rem;
    font-size: 0.95rem;
  }
  .media-word {
    max-width: 36rem;
    padding: 1.05rem 1.2rem;
    border-radius: 20px;
  }
  .media-word p {
    font-size: 1.15rem;
  }
}
</style>
