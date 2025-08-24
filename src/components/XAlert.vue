<template>
  <div :class="['border-l-4 p-4', colors[type] ?? '']">
    <div class="flex">
      <div class="shrink-0">
        <component v-if="icon" :is="icon" class="h-5 w-5" aria-hidden="true" />
        <CircleCheckIcon v-else-if="type === 'success'" class="h-5 w-5 text-success-400" aria-hidden="true" />
        <CircleXIcon v-else-if="type === 'danger'" class="h-5 w-5 text-danger-400" aria-hidden="true" />
        <TriangleAlertIcon v-else-if="type === 'warning'" class="h-5 w-5 text-warning-400" aria-hidden="true" />
        <CircleAlertIcon v-else class="h-5 w-5 text-blue-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <p v-if="message" class="text-sm">{{ message }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleCheckIcon, CircleXIcon, TriangleAlertIcon, CircleAlertIcon } from 'lucide-vue-next';
import { ColorType } from '../types';
import { FunctionalComponent } from 'vue';

type Props = {
  type: ColorType;
  title?: string;
  message?: string;
  icon?: FunctionalComponent;
};

defineProps<Props>();

const colors = {
  primary: 'border-primary-400 bg-primary-50 text-primary-700',
  secondary: 'border-secondary-400 bg-secondary-50 text-secondary-700',
  success: 'border-success-400 bg-success-50 text-success-700',
  danger: 'border-danger-400 bg-danger-50 text-danger-700',
  warning: 'border-warning-400 bg-warning-50 text-warning-700',
};
</script>
