<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEvents } from "@/services/resources";

import type { Ref } from "vue";
import type { IEvent } from "@/services/resources";

const events: Ref<IEvent[] | null> = ref(null);

onMounted(async () => {
  events.value = await getEvents();
});
</script>

<template>
  <ul data-aos="fade-right">
    <li v-for="event in events" :key="event.id" class="mb-4">
      <b>{{ event.title }}</b
      >. {{ event.description }}. Del {{ event.start_date }} al
      {{ event.due_date }}
    </li>
  </ul>
</template>
