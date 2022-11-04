<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getGallery } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";
import { ArrowUpCircleIcon } from "@heroicons/vue/24/solid";
import type { Ref } from "vue";
import type { IPhotoGallery } from "@/services/resources";

const photos: Ref<IPhotoGallery[] | null> = ref(null);
const visible = ref(0);

onMounted(async () => {
  photos.value = await getGallery();
});
</script>

<template>
  <LoadingContent :is-loading="photos === null">
    <div class="flex relative">
      <ArrowUpCircleIcon class="absolute z-10" />
      <img
        :src="photo.url"
        :key="photo.id"
        v-for="(photo, index) in photos"
        v-show="index === visible"
        class="w-full absolute"
      />
    </div>
  </LoadingContent>
</template>
