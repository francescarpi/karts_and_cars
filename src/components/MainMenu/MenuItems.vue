<script setup lang="ts">
import type { PropType } from "vue";
import type { IMenuItem } from "./types";

defineProps({
  options: {
    required: true,
    type: Object as PropType<IMenuItem[]>,
  },
  vertical: {
    required: false,
    default: false,
  },
});

defineEmits(["click"]);
</script>

<template>
  <ul class="flex gap-6" :class="{ 'flex-col': vertical }">
    <li
      v-for="option in options"
      class="cursor-pointer hover:text-secondary"
      :key="option.href"
      @click="$emit('click', option)"
    >
      {{ option.name }}
    </li>
  </ul>
</template>
