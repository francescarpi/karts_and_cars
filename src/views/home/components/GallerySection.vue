<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getGallery } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";

import type { Ref } from "vue";
import type { IPhotoGallery } from "@/services/resources";

const gallery: Ref<IPhotoGallery[]> = ref([]);
const options = {};

const getMediaUrl = (uri: string): string =>
  `${import.meta.env.VITE_MEDIA_HOST}${uri}`;

onMounted(async () => {
  let photos = await getGallery();
  photos = photos.map((photo) => ({
    id: photo.id,
    src: getMediaUrl(photo.src),
    thumbnail: getMediaUrl(photo.thumbnail),
    w: photo.w,
    h: photo.h,
  }));
  gallery.value = photos;
});
</script>

<template>
  <LoadingContent :is-loading="gallery.length === 0">
    <vue-picture-swipe :items="gallery" :options="options"></vue-picture-swipe>
  </LoadingContent>
</template>

<style scoped lang="scss">
::v-deep .gallery-thumbnail {
  display: none;
  &:first-child {
    display: inline;
  }
}
</style>
