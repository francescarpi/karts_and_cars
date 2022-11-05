<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="p-6">
    <h3 class="font-default text-xl font-bold w-full block text-primary">
      {{ title }}
    </h3>
    <div class="mt-4"><slot /></div>
  </section>
</template>
