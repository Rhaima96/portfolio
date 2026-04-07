<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <section
    id="contact"
    class="panel mx-2 grid gap-6 bg-[radial-gradient(circle_at_top_right,rgba(15,118,110,0.12),transparent_32%),var(--color-surface)] px-6 py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
  >
    <div>
      <p class="label">{{ t('sectionLabels.contact') }}</p>
      <h2 class="section-title mt-3">{{ t('contact.title') }}</h2>
      <p class="section-text mt-4">{{ t('contact.text') }}</p>
      <p class="mt-4 text-sm text-[var(--color-muted)]">{{ t('contact.location') }}</p>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start lg:justify-end">
      <a :href="`mailto:${profile.email}`" class="btn-primary">{{ t('contact.email') }}</a>
      <a
        href="/Cv%20%E2%80%93%20Mohamed%20Touhami%20Rhaima%20.pdf"
        download
        class="btn-secondary"
      >
        {{ t('contact.resume') }}
      </a>
      <a :href="profile.linkedin" target="_blank" rel="noreferrer" class="btn-secondary">
        {{ t('contact.linkedin') }}
      </a>
      <a :href="profile.github" target="_blank" rel="noreferrer" class="btn-secondary">
        {{ t('contact.github') }}
      </a>
      <a :href="`tel:${profile.phone}`" class="btn-secondary">{{ t('contact.phone') }}</a>
    </div>
  </section>
</template>
