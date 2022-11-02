<script setup lang="ts">
import { RouterView } from "vue-router";
import MainMenu from "./components/MainMenu.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <div>
    <MainMenu />
    <RouterView />
    <FooterSection />
  </div>
</template>

<style scoped></style>
