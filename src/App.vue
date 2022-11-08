<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import AOS from "aos";
import MainMenu from "./components/MainMenu/MainMenu.vue";
import FooterSection from "./components/FooterSection.vue";
import GoUp from "./components/GoUp.vue";

onMounted(() => {
  AOS.init({
    delay: 300,
  });
});
</script>

<template>
  <div>
    <MainMenu />
    <RouterView />
    <FooterSection />
    <GoUp />
  </div>
</template>

<style scoped></style>
