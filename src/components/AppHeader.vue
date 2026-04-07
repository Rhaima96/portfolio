<script setup>
import { computed, toRef } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
})

defineEmits(['toggle-theme', 'toggle-locale'])

const { t } = useI18n()
const themeRef = toRef(props, 'theme')
const themeLabel = computed(() => t(`toggles.theme.${themeRef.value}`))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
    <div class="navbar-shell mx-auto flex w-full max-w-[1240px] flex-col gap-4 rounded-[28px] px-4 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
      <a href="#home" class="flex items-center gap-4">
        <span class="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-highlight))] font-heading text-sm font-extrabold tracking-[0.18em] text-white">
          MR
        </span>

        <span>
          <strong class="block font-heading text-base font-bold text-[var(--color-text)]">
            {{ profile.name }}
          </strong>
          <small class="mt-1 block text-sm text-[var(--color-muted)]">
            {{ profile.role }} · {{ profile.stack }}
          </small>
        </span>
      </a>

      <nav class="hidden items-center gap-3 lg:flex">
        <a href="#expertise" class="nav-pill">{{ t('nav.expertise') }}</a>
        <a href="#parcours" class="nav-pill">{{ t('nav.parcours') }}</a>
        <a href="#projets" class="nav-pill">{{ t('nav.projets') }}</a>
        <a href="#contact" class="nav-pill">{{ t('nav.contact') }}</a>
      </nav>

      <div class="flex flex-col gap-3 sm:flex-row">
        <button type="button" class="nav-pill cursor-pointer" @click="$emit('toggle-locale')">
          {{ t('toggles.language') }}
        </button>
        <button type="button" class="nav-pill cursor-pointer" @click="$emit('toggle-theme')">
          {{ themeLabel }}
        </button>
      </div>
    </div>
  </header>
</template>
