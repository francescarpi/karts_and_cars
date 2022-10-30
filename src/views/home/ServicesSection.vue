<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getServices } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";
import TextBox from "@/components/TextBox.vue";

import type { Ref } from "vue";
import type { IService } from "@/services/resources";

const services: Ref<IService[] | null> = ref(null);

onMounted(async () => {
  services.value = await getServices();
});
</script>

<template>
  <LoadingContent :is-loading="services === null">
    <div class="flex flex-wrap gap-4">
      <TextBox
        :content="service.description"
        :key="service.id"
        v-for="service in services"
      />
    </div>
  </LoadingContent>
</template>
