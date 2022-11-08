<script setup lang="ts">
import { typeHash } from "@/constants";
import type { PropType } from "vue";
import type { IMenuItem } from "./types";

defineProps({
  options: {
    required: true,
    type: Object as PropType<IMenuItem[]>,
  },
});

const gotoSection = (item: IMenuItem): void => {
  switch (item.type) {
    case typeHash:
      (document.getElementById(item.href) as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      return;
  }
};
</script>

<template>
  <ul class="flex gap-6">
    <li
      v-for="option in options"
      class="cursor-pointer hover:text-secondary"
      :key="option.href"
      @click="gotoSection(option)"
    >
      {{ option.name }}
    </li>
  </ul>
</template>
