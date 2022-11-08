<script setup lang="ts">
import { ref } from "vue";
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

const mobileOpened = ref(false);
const handlerToggle = () => {
  mobileOpened.value = !mobileOpened.value;
};

const gotoSection = (item: IMenuItem): void => {
  handlerToggle();
  switch (item.type) {
    case typeHash:
      (document.getElementById(item.href) as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      return;
  }
};
</script>

<template>
  <div class="bg">
    <div class="bg-black text-white p-4 opacity-80">
      <div class="hidden md:max-w-6xl md:mx-auto md:block">
        <MenuItems :options="options" @click="gotoSection" />
      </div>
      <Bars3Icon class="block md:hidden w-6" @click="handlerToggle" />
    </div>
  </div>
  <div
    class="block md:hidden fixed right-0 top-0 bottom-0 bg-white p-4 z-10 shadow-md w-1/2"
    v-if="mobileOpened"
  >
    <MenuItems :options="options" :vertical="true" @click="gotoSection" />
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url("@/assets/imgs/flag.png");
}
</style>
