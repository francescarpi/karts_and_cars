<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="p-6 md:max-w-6xl md:mx-auto">
    <h3
      class="font-default text-xl font-bold w-full block text-primary drop-shadow-md"
    >
      {{ title }}
    </h3>
    <div class="mt-4"><slot /></div>
  </section>
</template>
