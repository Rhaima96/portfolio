<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section class="grid gap-7 px-2 py-4 lg:grid-cols-[1.2fr_0.8fr]">
    <div>
      <p class="label">{{ t('sectionLabels.opensource') }}</p>
      <h2 class="section-title mt-3">{{ t('openSource.title') }}</h2>
      <p class="section-text mt-4">{{ t('openSource.text') }}</p>
    </div>

    <div class="grid gap-4">
      <a
        v-for="item in tm('openSource.items')"
        :key="item.name"
        :href="item.href"
        target="_blank"
        rel="noreferrer"
        class="panel block p-6 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <span class="font-heading text-xl font-bold text-[var(--color-text)]">{{ item.name }}</span>
        <p class="section-text mt-2">{{ item.description }}</p>
      </a>
    </div>
  </section>
</template>
