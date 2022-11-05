<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getIdentity } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";

import type { Ref } from "vue";
import type { IIdentity } from "@/services/resources";

const identityTexts: Ref<IIdentity[] | null> = ref(null);

onMounted(async () => {
  identityTexts.value = await getIdentity();
});
</script>

<template>
  <LoadingContent :is-loading="identityTexts === null">
    <div data-aos="fade-up">
      <p
        class="mb-4"
        v-for="text in identityTexts"
        :key="text.id"
        v-html="text.text"
      />
    </div>
  </LoadingContent>
</template>
