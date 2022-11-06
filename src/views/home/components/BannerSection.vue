<script setup lang="ts">
import LogoKartsAndCars from "../../../components/LogoKartsAndCars.vue";
</script>

<template>
  <div class="h-72 relative md:h-96">
    <div class="bg absolute inset-0"></div>
    <div class="absolute inset-0 text-center md:max-w-6xl md:mx-auto">
      <LogoKartsAndCars class="mt-12 mb-4" />
      <h2
        class="font-default text-black text-2xl bg-white opacity-75 m-10 p-4 rounded-xl drop-shadow"
      >
        Apasionados del motor,<br />a tu servicio!
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  @apply bg-no-repeat bg-cover h-full w-full opacity-70 bg-bottom;
  background-image: url("@/assets/imgs/cars1.jpeg");
}
</style>
