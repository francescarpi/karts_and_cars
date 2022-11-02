<script setup lang="ts">
import { ref } from "vue";
const year = ref(new Date().getFullYear());
</script>

<template>
  <div class="text-right p-4 mt-4">Karts & Cars © {{ year }}</div>
</template>
