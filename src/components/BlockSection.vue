<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="p-4">
    <h3 class="font-default text-xl font-bold w-full border-b-2 pb-2">
      {{ title }}
    </h3>
    <div class="mt-2"><slot /></div>
  </section>
</template>
