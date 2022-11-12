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
  <BlockSection title="IDENTIDAD" id="identity">
    <IdentitySection />
  </BlockSection>
  <BlockSection title="GALERÍA" id="gallery">
    <GallerySection />
  </BlockSection>
  <BlockSection title="SERVICIOS" id="services">
    <ServicesSection />
  </BlockSection>
  <BlockSection title="¿DÓNDE ESTAREMOS?" id="events">
    <EventsSection />
  </BlockSection>
  <BlockSection title="CONTACTO" id="contact">
    <ContactSection />
  </BlockSection>
</template>
