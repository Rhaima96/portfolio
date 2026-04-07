<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section class="px-2 py-4">
    <div class="mb-6">
      <p class="label">{{ t('sectionLabels.skills') }}</p>
      <h2 class="section-title mt-3">{{ t('headings.skills') }}</h2>
    </div>

    <div class="flex flex-wrap gap-3">
      <span
        v-for="skill in tm('skills')"
        :key="skill"
        class="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-2.5 font-semibold text-[var(--color-muted)]"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
