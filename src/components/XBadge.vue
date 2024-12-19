<template>
  <span :class="`inline-flex items-center rounded-full font-medium ${sizes[size] ?? ''} ${colors[color] ?? ''}`"
    ><component v-if="icon" :is="icon" class="h-4 w-4 mr-1" aria-hidden="true" />
    <span v-if="label">{{ label }}</span>
    <slot />
    <component v-if="postIcon" :is="postIcon" class="ml-1 h-4 w-4" aria-hidden="true" />
  </span>
</template>

<script setup lang="ts">
type Props = {
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger';
  label?: string;
  icon?: any;
  postIcon?: any;
  size?: 'small' | 'medium' | 'normal' | 'large';
};

withDefaults(defineProps<Props>(), { color: 'info', size: 'normal' });

const colors = {
  primary: 'bg-indigo-100 text-indigo-800',
  secondary: 'bg-gray-100 text-gray-800',
  info: 'bg-pink-100 text-pink-800',
  success: 'bg-yellow-100 text-yellow-800',
  warning: 'bg-lime-100 text-lime-800',
  danger: 'bg-red-100 text-red-800',
};

const sizes = {
  small: 'px-2 py-0.5 text-xs',
  medium: 'px-2.5 py-0.5 text-xs',
  normal: 'px-3 py-0.5 text-sm',
  large: 'px-3.5 py-1 text-medium',
};
</script>
