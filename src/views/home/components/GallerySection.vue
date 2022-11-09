<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getGallery } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";
import type { Ref } from "vue";
import type { IPhotoGallery } from "@/services/resources";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/vue/24/outline/";

const gallery: Ref<IPhotoGallery[]> = ref([]);
const index = ref(0);

onMounted(async () => {
  gallery.value = await getGallery();
});

const showPrevious = () => {
  index.value =
    index.value === 0
      ? (index.value = gallery.value.length - 1)
      : index.value - 1;
};
const showNext = () => {
  index.value = index.value === gallery.value.length - 1 ? 0 : index.value + 1;
};
const getMediaUrl = (uri: string): string =>
  `${import.meta.env.VITE_MEDIA_HOST}${uri}`;
</script>

<template>
  <LoadingContent :is-loading="gallery.length === 0">
    <div class="flex relative">
      <ArrowLeftCircleIcon
        class="absolute text-white w-16 cursor-pointer left-0 top-1/2 -mt-6"
        @click="showPrevious"
      />
      <img :src="getMediaUrl(gallery[index].src)" class="w-full h-full block" />
      <ArrowRightCircleIcon
        class="absolute text-white w-16 cursor-pointer right-0 top-1/2 -mt-6"
        @click="showNext"
      />
    </div>
  </LoadingContent>
</template>
