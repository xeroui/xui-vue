<template>
  <RadioGroup
    :default-value="modelValue"
    @update:modelValue="(value) => $emit('update:modelValue', value)"
    class="mt-1 grid gap-2.5"
  >
    <RadioGroupOption
      as="template"
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
      v-slot="{ active, checked }"
    >
      <div
        :class="[
          !option.disabled ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
          active ? 'ring-2 ring-indigo-600 ring-offset-2' : '',
          checked
            ? 'bg-sky-600 text-white ring-0 hover:bg-sky-500'
            : 'bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50',
          !active && !checked ? 'ring-inset' : '',
          active && checked ? 'ring-2' : '',
          'flex items-center justify-center rounded-md px-3 py-2.5 text-sm font-medium sm:flex-1',
        ]"
      >
        <CircleCheckIcon v-if="showCheck" :class="[!checked ? 'invisible' : '', 'h-5 w-5 mr-2']" aria-hidden="true" />
        {{ option.label }}
      </div>
    </RadioGroupOption>
  </RadioGroup>
</template>
<script setup lang="ts">
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { CircleCheckIcon } from 'lucide-vue-next';

type Props = {
  options: { label: string; value: string | number; disabled?: boolean }[];
  modelValue: string | number;
  showCheck?: boolean;
};

defineProps<Props>();
defineEmits(['update:modelValue']);
</script>
