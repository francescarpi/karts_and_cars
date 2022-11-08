<script setup lang="ts">
import MenuItems from "./MenuItems.vue";
import { typeHash } from "@/constants";
import { Bars3Icon } from "@heroicons/vue/24/outline/";
import type { IMenuItem } from "./types";

const options: IMenuItem[] = [
  {
    name: "Identidad",
    type: typeHash,
    href: "identity",
  },
  {
    name: "Galería",
    type: typeHash,
    href: "gallery",
  },
  {
    name: "Servicios",
    type: typeHash,
    href: "services",
  },
  {
    name: "Eventos",
    type: typeHash,
    href: "events",
  },
  {
    name: "Contacto",
    type: typeHash,
    href: "contact",
  },
];
</script>

<template>
  <div class="bg">
    <div class="bg-black text-white p-4 opacity-80">
      <div class="hidden md:max-w-6xl md:mx-auto md:block">
        <MenuItems :options="options" />
      </div>
      <Bars3Icon class="block md:hidden w-6" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url("@/assets/imgs/flag.png");
}
</style>
