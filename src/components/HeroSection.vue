<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

const { tm, t } = useI18n()
</script>

<template>
  <section class="grid gap-7 px-2 pb-3 pt-6 lg:grid-cols-[1.2fr_0.8fr]">
    <div class="hero-panel hero-enter order-2 relative overflow-hidden p-6 sm:p-10 lg:order-1">
      <div class="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.24),transparent_68%)] blur-2xl" />
      <div class="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.18),transparent_68%)] blur-2xl" />
      <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)]" />
      <div class="mb-8 flex items-center justify-between rounded-[22px] border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-4 py-3">
        <div class="flex items-center gap-2">
          <span class="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
          <span class="h-2.5 w-2.5 rounded-full bg-[var(--color-highlight)]" />
          <span class="h-2.5 w-2.5 rounded-full bg-slate-400/70" />
        </div>
        <span class="font-mono text-xs text-[var(--color-muted)]">laravel-vue-portfolio.vue</span>
      </div>

      <p class="label">{{ t('hero.availability') }}</p>
      <h1 class="mt-4 max-w-[12ch] font-heading text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl xl:text-[4.35rem]">
        {{ t('hero.title') }}
      </h1>
      <p class="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.03rem]">
        {{ t('hero.intro') }}
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a :href="`mailto:${profile.email}`" class="btn-primary">{{ t('hero.ctaPrimary') }}</a>
        <a href="#projets" class="btn-secondary">{{ t('hero.ctaSecondary') }}</a>
        <a
          href="/Cv%20%E2%80%93%20Mohamed%20Touhami%20Rhaima%20.pdf"
          download
          class="btn-secondary"
        >
          {{ t('hero.ctaResume') }}
        </a>
      </div>

      <div class="mt-7 flex flex-wrap gap-3">
        <span class="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-2 font-mono text-xs text-[var(--color-muted)]">
          stack: Laravel + Vue.js
        </span>
        <span class="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-2 font-mono text-xs text-[var(--color-muted)]">
          focus: performance, SEO, product
        </span>
      </div>

      <ul class="mt-9 grid list-none gap-4 p-0 lg:grid-cols-3">
        <li
          v-for="stat in tm('hero.stats')"
          :key="stat.label"
          class="glass-tile reveal-up rounded-3xl p-4"
        >
          <strong class="block font-heading text-2xl text-[var(--color-text)]">
            {{ stat.value }}
          </strong>
          <span class="mt-1 block text-sm leading-6 text-[var(--color-muted)]">
            {{ stat.label }}
          </span>
        </li>
      </ul>
    </div>

    <aside class="hero-side hero-enter-delay order-1 flex flex-col gap-5 lg:order-2">
      <div class="photo-frame relative overflow-hidden rounded-[34px] p-3">
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,14,24,0)_45%,rgba(9,14,24,0.72)_100%)]" />
        <img
          src="/my_photo.jpeg"
          :alt="profile.name"
          class="h-auto w-full rounded-[26px] object-contain object-top sm:h-[420px] sm:object-cover sm:object-center"
        />
        <div class="absolute inset-x-7 bottom-7">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {{ profile.role }}
          </p>
          <h2 class="mt-2 font-heading text-3xl font-bold tracking-[-0.04em] text-white">
            {{ profile.name }}
          </h2>
          <span class="mt-2 block text-sm text-white/70">{{ profile.stack }}</span>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <article class="glass-tile reveal-up rounded-[24px] p-5">
          <small class="text-sm text-[var(--color-muted)]">{{ t('hero.panel.expertise') }}</small>
          <strong class="mt-2 block text-[var(--color-text)]">Laravel · Vue · Inertia</strong>
        </article>
        <article class="glass-tile reveal-up rounded-[24px] p-5">
          <small class="text-sm text-[var(--color-muted)]">{{ t('hero.panel.impact') }}</small>
          <strong class="mt-2 block text-[var(--color-text)]">CRM · LMS · E-commerce</strong>
        </article>
        <article class="glass-tile reveal-up rounded-[24px] p-5">
          <small class="text-sm text-[var(--color-muted)]">Open source</small>
          <strong class="mt-2 block text-[var(--color-text)]">Packagist · Docs · Integrations</strong>
        </article>
        <article class="glass-tile reveal-up rounded-[24px] p-5">
          <small class="text-sm text-[var(--color-muted)]">{{ t('hero.panel.lead') }}</small>
          <strong class="mt-2 block text-[var(--color-text)]">Architecture · Review · Delivery</strong>
        </article>
      </div>
    </aside>
  </section>
</template>
