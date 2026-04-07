<script setup>
import { useI18n } from 'vue-i18n'
import ToolIcon from './ToolIcon.vue'

const { tm, t } = useI18n()
</script>

<template>
  <section class="px-2 py-4">
    <div class="mb-6">
      <p class="label">{{ t('sectionLabels.skills') }}</p>
      <h2 class="section-title mt-3">{{ t('headings.skills') }}</h2>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="skill in tm('skills')"
        :key="skill"
        class="tool-card group flex items-center gap-4 rounded-[26px] border border-[var(--color-line)] px-4 py-4 transition duration-300 hover:-translate-y-1"
      >
        <ToolIcon :name="skill" />
        <div class="min-w-0">
          <strong class="block font-heading text-lg font-bold text-[var(--color-text)]">
            {{ skill }}
          </strong>
          <span class="mt-1 block text-sm text-[var(--color-muted)]">
            {{ t('sectionLabels.skills') }} / Tooling
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
