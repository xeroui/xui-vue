<template>
  <button
    :type="type"
    :disabled
    :class="
      twMerge(
        'inline-flex items-center justify-center gap-2',
        sizes[size] ?? '',
        'border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
        (outline ? outlineColors : colors)[color] ?? '',
        block && 'w-full',
        rounded && 'rounded-full',
        disabled && 'disabled:cursor-not-allowed disabled:opacity-50'
      )
    "
  >
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4 -ml-0.5 text-white mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <component v-if="icon" :is="icon" class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
    <span v-if="label">{{ label }}</span>
    <slot />
    <component v-if="postIcon" :is="postIcon" class="ml-2 h-4 w-4" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { ColorType, SizeType } from '../types';

type Props = {
  type?: 'button' | 'submit' | 'reset';
  color?: 'default' | ColorType;
  label?: string;
  loading?: boolean;
  icon?: any;
  postIcon?: any;
  size?: SizeType;
  block?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  outline?: boolean;
};

withDefaults(defineProps<Props>(), {
  type: 'button',
  color: 'default',
  size: 'normal',
});

const colors = {
  default: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-500',
  primary: 'bg-primary text-primary-foreground hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-700 focus:ring-secondary-500',
  success: 'bg-success text-success-foreground hover:bg-success-700 focus:ring-success-500',
  warning: 'bg-warning text-warning-foreground hover:bg-warning-700 focus:ring-warning-500',
  danger: 'bg-danger text-danger-foreground hover:bg-danger-700 focus:ring-danger-500',
};

const outlineColors = {
  default: 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300 focus:ring-indigo-500',
  primary: 'bg-white text-primary border-primary-200 hover:bg-primary-50 focus:ring-primary-500',
  secondary: 'bg-white text-secondary border-secondary-200 hover:bg-secondary-50 focus:ring-secondary-500',
  success: 'bg-white text-success border-success-200 hover:bg-success-50 focus:ring-success-500',
  warning: 'bg-white text-warning border-warning-200 hover:bg-warning-50 focus:ring-warning-500',
  danger: 'bg-white text-danger border-danger-200 hover:bg-danger-50 focus:ring-danger-500',
};

const sizes = {
  small: 'rounded px-2.5 py-1.5 text-xs',
  medium: 'rounded-md px-3 py-2 text-sm leading-4',
  normal: 'rounded-md px-4 py-2 text-sm',
  large: 'rounded-md px-4 py-2 text-base',
};
</script>
