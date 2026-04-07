<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section id="expertise" class="grid gap-7 px-2 py-4 lg:grid-cols-[1.3fr_0.9fr]">
    <div>
      <p class="label">{{ t('sectionLabels.expertise') }}</p>
      <h2 class="section-title mt-3">{{ t('summary.title') }}</h2>
      <p class="section-text mt-4">
        {{ t('summary.text') }}
      </p>
    </div>

    <div class="grid gap-4">
      <article
        v-for="card in tm('cards')"
        :key="card.title"
        class="panel p-6"
      >
        <h3 class="font-heading text-2xl font-bold tracking-[-0.03em] text-[var(--color-text)]">
          {{ card.title }}
        </h3>
        <p class="section-text mt-3">{{ card.text }}</p>
      </article>
    </div>
  </section>
</template>
