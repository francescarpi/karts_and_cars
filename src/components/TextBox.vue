<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div v-html="content" class="p-4 w-full" />
</template>
