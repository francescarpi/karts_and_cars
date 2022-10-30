<script setup lang="ts">
import { RouterView } from "vue-router";
import MainMenu from "./components/MainMenu.vue";
</script>

<template>
  <div>
    <MainMenu />
    <RouterView />
  </div>
</template>

<style scoped></style>
