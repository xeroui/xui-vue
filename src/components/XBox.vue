<template>
  <div class="overflow-hidden rounded-lg bg-white border shadow-sm px-4 py-4 sm:px-5 sm:py-4">
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
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
defineProps<{ loading?: boolean }>();
</script>
