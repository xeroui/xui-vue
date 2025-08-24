<template>
  <div class="w-full py-1.5">
    <x-form-label v-if="label" :label :id :required />
    <div class="relative mt-1 rounded-md shadow-sm">
      <textarea
        v-model="model"
        :id="id"
        :class="`block w-full rounded-md ${hasErrors ? errorClasses : normalClasses} focus:outline-none sm:text-sm`"
        :placeholder="placeholder"
        :aria-invalid="hasErrors"
      ></textarea>
      <div v-if="hasErrors" class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
    <p v-if="hasErrors" class="mt-2 text-sm text-red-600">
      {{ Array.isArray(props.errors) ? props.errors.join(' ') : errors }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { CircleAlert } from 'lucide-vue-next';
import { computed } from 'vue';
import XFormLabel from './form/XFormLabel.vue';

type Props = {
  id?: string;
  modelValue: any;
  label?: string;
  placeholder?: string;
  addonLeft?: string;
  addonRight?: string;
  size?: 'small' | 'medium' | 'normal' | 'large';
  block?: boolean;
  errors?: string[] | string;
  required?: boolean;
};

const props = withDefaults(defineProps<Props>(), { type: 'text', size: 'normal', block: false });

const model = defineModel<string>();

const normalClasses = 'border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500';
const errorClasses = 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500';

const hasErrors = computed(() => {
  if (Array.isArray(props.errors) && props.errors.length) {
    return true;
  }

  return !!props.errors;
});
</script>
