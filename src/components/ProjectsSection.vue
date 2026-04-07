<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section id="projets" class="px-2 py-4">
    <div class="mb-6">
      <p class="label">{{ t('sectionLabels.projects') }}</p>
      <h2 class="section-title mt-3">{{ t('sectionLabels.projects') }}</h2>
    </div>

    <div class="grid gap-4 xl:grid-cols-3">
      <article
        v-for="project in tm('projects')"
        :key="project.title"
        class="panel p-6"
      >
        <p class="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
          {{ project.meta }}
        </p>
        <h3 class="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-[var(--color-text)]">
          {{ project.title }}
        </h3>
        <p class="section-text mt-3">{{ project.text }}</p>
        <strong class="mt-4 block font-heading text-base text-[var(--color-accent)]">
          {{ project.result }}
        </strong>
      </article>
    </div>
  </section>
</template>
