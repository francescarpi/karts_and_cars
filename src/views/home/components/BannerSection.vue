<script setup lang="ts">
import LogoKartsAndCars from "../../../components/LogoKartsAndCars.vue";
</script>

<template>
  <div class="h-72 relative">
    <div class="bg absolute inset-0"></div>
    <div class="absolute inset-0 text-center">
      <LogoKartsAndCars class="mt-16 mb-4" />
      <h2 class="font-default text-gray-1000 text-2xl">
        Apasionados del motor<br />a tu servicio
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  @apply bg-no-repeat bg-cover h-full w-full opacity-70;
  background-image: url("@/assets/imgs/cars1.jpeg");
}
</style>
