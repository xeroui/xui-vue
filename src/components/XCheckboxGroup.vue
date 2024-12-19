<template>
  <div v-for="option in options" class="">
    <XCheckbox
      :label="option.label"
      :helpText="option.helpText"
      @change="
        (e: any) => {
          if (e.target.checked) {
            selected.push(option.value);
          } else {
            selected = selected.filter((v) => v !== option.value);
          }
        }
      "
    />
  </div>
</template>
<script setup lang="ts">
import XCheckbox from './XCheckbox.vue';

const selected = defineModel<(string | number)[]>({ default: [] });
defineProps<{ options: { label: string; value: string | number; helpText?: string }[] }>();
</script>
