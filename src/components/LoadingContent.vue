<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div v-if="isLoading">Cargando...</div>
  <slot v-else />
</template>
