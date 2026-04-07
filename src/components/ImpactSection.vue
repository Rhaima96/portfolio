<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section class="px-2 py-4">
    <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="label">{{ t('sectionLabels.impact') }}</p>
        <h2 class="section-title mt-3">{{ t('headings.impact') }}</h2>
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article
        v-for="(item, index) in tm('impact')"
        :key="item"
        class="panel flex gap-5 p-6"
      >
        <span class="font-heading text-2xl font-bold text-[var(--color-highlight)]">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <p class="section-text">{{ item }}</p>
      </article>
    </div>
  </section>
</template>
