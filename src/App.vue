<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";
import MainMenu from "./components/MainMenu.vue";
import FooterSection from "./components/FooterSection.vue";

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
    <MainMenu />
    <RouterView />
    <FooterSection />
  </div>
</template>

<style scoped></style>
