<template>
  <div class="suggest-list">
    <slot />
  </div>
</template>

<style scoped>
.suggest-list {
  background: var(--neu-bg);
  border-radius: 22px;
  box-shadow: var(--neu-raised-sm);
  padding: 0.1rem 0.55rem;
}
.suggest-list :deep(.archive-card),
.suggest-list :deep(.history-card),
.suggest-list :deep(.t-card),
.suggest-list :deep(.v-card),
.suggest-list :deep(.pm-card),
.suggest-list :deep(.person-row),
.suggest-list :deep(.acc-row),
.suggest-list :deep(.mem-card) {
  box-shadow: none;
  background: transparent;
  border-radius: 0;
  margin: 0;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
</style>
