<script setup>
import { computed } from 'vue'
import {
  siBootstrap,
  siDocker,
  siGit,
  siInertia,
  siJirasoftware,
  siLaravel,
  siLivewire,
  siMongodb,
  siMysql,
  siNuxt,
  siPhp,
  siPostgresql,
  siReadthedocs,
  siSymfony,
  siTailwindcss,
  siVuedotjs,
} from 'simple-icons'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const iconMap = [
  { match: /laravel/i, icon: siLaravel },
  { match: /vue/i, icon: siVuedotjs },
  { match: /inertia/i, icon: siInertia },
  { match: /nuxt/i, icon: siNuxt },
  { match: /livewire/i, icon: siLivewire },
  { match: /php/i, icon: siPhp },
  { match: /symfony/i, icon: siSymfony },
  { match: /mysql/i, icon: siMysql },
  { match: /postgresql/i, icon: siPostgresql },
  { match: /mongo/i, icon: siMongodb },
  { match: /tailwind/i, icon: siTailwindcss },
  { match: /bootstrap/i, icon: siBootstrap },
  { match: /docker/i, icon: siDocker },
  { match: /github|gitlab/i, icon: siGit },
  { match: /agile/i, icon: siJirasoftware },
  { match: /documentation/i, icon: siReadthedocs },
]

const resolved = computed(() => {
  const match = iconMap.find((item) => item.match.test(props.name))

  if (match) {
    return {
      type: 'svg',
      path: match.icon.path,
      color: `#${match.icon.hex}`,
      title: match.icon.title,
    }
  }

  return {
    type: 'text',
    short: props.name.slice(0, 2).toUpperCase(),
  }
})
</script>

<template>
  <span
    class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-line)] bg-[var(--color-surface-strong)] shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
    :title="resolved.title || props.name"
  >
    <svg
      v-if="resolved.type === 'svg'"
      viewBox="0 0 24 24"
      aria-hidden="true"
      class="h-5 w-5"
      :style="{ color: resolved.color }"
    >
      <path :d="resolved.path" fill="currentColor" />
    </svg>
    <span
      v-else
      class="font-heading text-[0.72rem] font-bold tracking-[0.08em] text-[var(--color-text)]"
    >
      {{ resolved.short }}
    </span>
  </span>
</template>
