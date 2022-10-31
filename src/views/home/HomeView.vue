<script setup lang="ts">
import BannerHome from "@/components/BannerHome.vue";
import BlockSection from "@/components/BlockSection.vue";
import IdentitySection from "./IdentitySection.vue";
import ServicesSection from "./ServicesSection.vue";
import EventsSection from "./EventsSection.vue";
</script>

<template>
  <BannerHome />
  <BlockSection title="IDENTIDAD"><IdentitySection /></BlockSection>
  <BlockSection title="GALERÍA ÚLTIMOS EVENTOS">Content</BlockSection>
  <BlockSection title="SERVICIOS">
    <ServicesSection />
  </BlockSection>
  <BlockSection title="¿DONDE ESTAREMOS?">
    <EventsSection />
  </BlockSection>
</template>
