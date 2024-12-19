<template>
  <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white border shadow-sm">
    <div v-if="loading">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
    <template v-else>
      <div v-if="$slots.header" class="px-4 py-4 sm:px-5 sm:py-4">
        <slot name="header" />
      </div>
      <div v-else-if="title" class="px-4 py-4 sm:px-5 sm:py-4">
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.default" class="px-4 py-4 sm:px-5 sm:py-4">
        <slot />
      </div>
      <div v-if="$slots.footer" class="px-4 py-4 sm:px-5 sm:py-4">
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{ loading?: boolean; title?: string; subtitle?: string }>();
</script>
