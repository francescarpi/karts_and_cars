<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div v-html="content" class="bg-lime-200 p-4 w-full" />
</template>
