<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEvents } from "@/services/resources";
import LoadingContent from "@/components/LoadingContent.vue";
import type { Ref } from "vue";
import type { IEvent } from "@/services/resources";

const events: Ref<IEvent[] | null> = ref(null);

onMounted(async () => {
  events.value = await getEvents();
});

const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(date));
};
</script>

<template>
  <LoadingContent :is-loading="events === null">
    <ul data-aos="fade-right">
      <li v-for="event in events" :key="event.id" class="mb-4">
        <b>{{ event.title }}</b
        >. {{ event.description }}. <br />
        <span class="text-xs">
          Del {{ formatDate(event.start_date) }} al
          {{ formatDate(event.due_date) }}
        </span>
      </li>
    </ul>
  </LoadingContent>
</template>
