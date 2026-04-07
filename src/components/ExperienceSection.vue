<script setup>
import { useI18n } from 'vue-i18n'

const { tm, t } = useI18n()
</script>

<template>
  <section id="parcours" class="px-2 py-4">
    <div class="mb-6">
      <p class="label">{{ t('sectionLabels.timeline') }}</p>
      <h2 class="section-title mt-3">{{ t('headings.timeline') }}</h2>
    </div>

    <div class="relative grid gap-4 before:absolute before:bottom-0 before:left-[118px] before:top-0 before:hidden before:w-px before:bg-[var(--color-line)] lg:before:block">
      <article
        v-for="job in tm('experience')"
        :key="`${job.title}-${job.period}`"
        class="grid gap-3 lg:grid-cols-[100px_1fr] lg:gap-7"
      >
        <div class="pt-0 text-sm font-bold text-[var(--color-muted)] lg:pt-4">
          {{ job.period }}
        </div>

        <div class="panel relative p-5 pl-7 lg:p-6 lg:pl-8 before:absolute before:-left-[18px] before:top-6 before:hidden before:h-3 before:w-3 before:rounded-full before:bg-[var(--color-highlight)] before:shadow-[0_0_0_6px_rgba(194,65,12,0.12)] lg:before:block">
          <h3 class="font-heading text-2xl font-bold tracking-[-0.03em] text-[var(--color-text)]">
            {{ job.title }}
          </h3>
          <p class="mt-2 font-semibold text-[var(--color-muted)]">{{ job.company }}</p>
          <ul class="mt-4 list-disc pl-5 text-[var(--color-muted)]">
            <li v-for="point in job.points" :key="point" class="mt-2 leading-7 first:mt-0">
              {{ point }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
