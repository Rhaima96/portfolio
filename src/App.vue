<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import HeroSection from './components/HeroSection.vue'
import ImpactSection from './components/ImpactSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import { profile } from './data/profile'

const defaultTheme = 'light'
const theme = ref(defaultTheme)
const { locale } = useI18n()

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
  },
})

onMounted(() => {
  const storedTheme = localStorage.getItem('portfolio-theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    theme.value = storedTheme
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }

  document.documentElement.setAttribute('data-theme', theme.value)
  document.documentElement.lang = currentLocale.value
})

watch(theme, (value) => {
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem('portfolio-theme', value)
})

watch(currentLocale, (value) => {
  document.documentElement.lang = value
  localStorage.setItem('portfolio-locale', value)
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

function toggleLocale() {
  currentLocale.value = currentLocale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div class="app-shell">
    <AppHeader
      :profile="profile"
      :theme="theme"
      @toggle-theme="toggleTheme"
      @toggle-locale="toggleLocale"
    />

    <main id="home" class="mx-auto w-[min(1240px,calc(100%-20px))] px-1 pt-28 sm:w-[min(1240px,calc(100%-32px))] sm:px-0 sm:pt-32">
      <HeroSection :profile="profile" />
      <ExpertiseSection />
      <ImpactSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <SkillsSection />
      <ContactSection :profile="profile" />
    </main>

    <AppFooter :email="profile.email" />
  </div>
</template>
