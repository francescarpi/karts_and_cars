<script setup lang="ts">
import BannerSection from "@/views/home/components/BannerSection.vue";
import BlockSection from "@/components/BlockSection.vue";
import IdentitySection from "./components/IdentitySection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import EventsSection from "./components/EventsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import GallerySection from "./components/GallerySection.vue";
</script>

<template>
  <BannerSection />
  <BlockSection title="IDENTIDAD">
    <IdentitySection />
  </BlockSection>
  <BlockSection title="GALERÍA EVENTOS">
    <GallerySection />
  </BlockSection>
  <BlockSection title="SERVICIOS">
    <ServicesSection />
  </BlockSection>
  <BlockSection title="¿DONDE ESTAREMOS?">
    <EventsSection />
  </BlockSection>
  <BlockSection title="CONTACTO">
    <ContactSection />
  </BlockSection>
</template>
