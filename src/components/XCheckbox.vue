<template>
  <div class="relative flex items-start w-full py-1.5">
    <div class="flex h-6 items-center">
      <input
        :id="randomStr"
        :name="randomStr"
        v-model="model"
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
    </div>
    <div class="ml-3 leading-6">
      <label v-if="$slots.default" :for="randomStr">
        <slot />
      </label>
      <label v-else :for="randomStr" class=""
        >{{ label }} <span v-if="helpText" class="text-gray-500">{{ helpText }}</span></label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
defineProps<{ label?: string; helpText?: string }>();
const randomStr = Math.random().toString(36).substring(7);
</script>
