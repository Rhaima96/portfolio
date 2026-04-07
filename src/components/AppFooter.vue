<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  email: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <footer class="flex flex-col gap-3 px-2 pb-2 pt-7 text-sm text-[var(--color-muted)] lg:flex-row lg:justify-between">
    <span>{{ t('footer') }}</span>
    <span>{{ email }}</span>
  </footer>
</template>
