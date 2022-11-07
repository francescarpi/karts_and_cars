<script setup lang="ts">
import MenuItems from "./MenuItems.vue";

const typeHash = "hash";

interface IMenuItem {
  name: string;
  type: string;
  href: string;
}

const options: IMenuItem[] = [
  {
    name: "Identidad",
    type: "hash",
    href: "identity",
  },
  {
    name: "Galería",
    type: "hash",
    href: "gallery",
  },
  {
    name: "Servicios",
    type: "hash",
    href: "services",
  },
  {
    name: "Eventos",
    type: "hash",
    href: "events",
  },
  {
    name: "Contacto",
    type: "hash",
    href: "contact",
  },
];
</script>

<template>
  <div class="bg">
    <div class="bg-black text-white p-4 opacity-80">
      <div class="md:max-w-6xl md:mx-auto">
        <MenuItems />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url("@/assets/imgs/flag.png");
}
</style>
