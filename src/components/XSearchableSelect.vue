<template>
  <Combobox
    as="div"
    :model-value="modelValue"
    :disabled="disabled"
    :multiple="multiple"
    nullable
    :class="`w-full py-1.5 ${disabled ? ' opacity-50' : ''}`"
    @update:modelValue="
      (value) => {
        $emit('update:modelValue', value);
        query = '';
      }
    "
    v-slot="{ open }"
  >
    <ComboboxLabel v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</ComboboxLabel>
    <div class="relative mt-1">
      <template v-if="open">
        <ComboboxInput
          class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @change="query = $event.target.value"
          :display-value="(_item) => query"
        />
        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>
      </template>
      <ComboboxButton v-else class="relative w-full">
        <input
          readonly
          :value="currentLabel"
          class="cursor-pointer w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="option in filteredOptions"
          :key="getValue(option)"
          :value="getValue(option)"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-3 pr-9',
              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
            ]"
          >
            <div class="flex items-center">
              <img v-if="optionAvatar" :src="getAvatar(option)" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
              <span :class="[optionAvatar && 'ml-3', selected && 'font-semibold']">
                {{ getLabel(option) }}
              </span>
            </div>

            <span
              v-if="selected"
              :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue';

type Option = { label?: string; value?: any } & Record<string, any>;

type Props = {
  modelValue: any;
  label?: string;
  options: Option[];
  disabled?: boolean;
  multiple?: boolean;
  optionLabel?: string | ((option: Option) => string);
  optionValue?: string | ((option: Option) => string);
  optionAvatar?: string | ((option: Option) => string);
  filterWith?: string | ((option: Option, search: string) => boolean);
  placeholder?: string;
};

const props = withDefaults(defineProps<Props>(), {
  optionLabel: 'label',
  optionValue: 'value',
  placeholder: 'Select or Type to search',
  disabled: false,
  multiple: false,
});
defineEmits(['update:modelValue']);

const query = ref('');
const filteredOptions = computed(() => {
  if (!query.value) {
    return props.options.slice(0, 50);
  }

  return props.options
    .filter((opt) =>
      typeof props.filterWith === 'function'
        ? props.filterWith(opt, query.value)
        : (props.filterWith && props.filterWith in opt ? opt[props.filterWith] : getLabel(opt))
            ?.toLowerCase()
            ?.includes(query.value.toLowerCase())
    )
    .slice(0, 50);
});

const currentLabel = computed(() => {
  if (query.value) return query.value;

  const option = props.options.find((option) => getValue(option) === props.modelValue);

  return option ? getLabel(option) : query.value ? query.value : props.placeholder;
});

function getLabel(option: Option): string {
  return typeof props.optionLabel === 'function' ? props.optionLabel(option) : option[props.optionLabel];
}

function getAvatar(option: Option): string {
  if (!props.optionAvatar) return '';

  return typeof props.optionAvatar === 'function' ? props.optionAvatar(option) : option[props.optionAvatar];
}

function getValue(option: Option): string {
  return typeof props.optionValue === 'function' ? props.optionValue(option) : option[props.optionValue];
}
</script>
