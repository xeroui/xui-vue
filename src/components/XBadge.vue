<template>
  <span
    :class="
      twMerge(
        `inline-flex items-center rounded-full font-medium`,
        sizes[size] ?? '',
        (outline ? outlineColors : colors)[color] ?? '',
        props.class
      )
    "
  >
    <component v-if="icon" :is="icon" class="h-4 w-4 mr-1" aria-hidden="true" />
    <span v-if="label">{{ label }}</span>
    <slot />
    <component v-if="postIcon" :is="postIcon" class="ml-1 h-4 w-4" aria-hidden="true" />
  </span>
</template>

<script setup lang="ts">
import { ColorType, SizeType } from '../types';
import { twMerge } from 'tailwind-merge';

type Props = {
  color?: ColorType;
  label?: string;
  icon?: any;
  postIcon?: any;
  size?: SizeType;
  outline?: boolean;
  class?: string;
};

const props = withDefaults(defineProps<Props>(), { color: 'primary', size: 'normal' });

const colors = {
  primary: 'bg-primary-100 text-primary-800',
  secondary: 'bg-secondary-100 text-secondary-800',
  success: 'bg-success-100 text-success-800',
  warning: 'bg-warning-100 text-warning-800',
  danger: 'bg-danger-100 text-danger-800',
};

const outlineColors = {
  primary: 'bg-white text-primary-600 border border-primary-200',
  secondary: 'bg-white text-secondary-600 border border-secondary-200',
  success: 'bg-white text-success-600 border border-success-200',
  warning: 'bg-white text-warning-600 border border-warning-200',
  danger: 'bg-white text-danger-600 border border-danger-200',
};

const sizes = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-2.5 py-0.5 text-xs',
  normal: 'px-3 py-0.5 text-sm',
  large: 'px-3.5 py-1 text-medium',
};
</script>
