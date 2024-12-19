<template>
  <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700"
    >{{ label }}<span v-if="required" class="ml-1">*</span></label
  >
</template>

<script setup lang="ts">
defineProps<{ label: string; id?: string; required?: boolean }>();
</script>
