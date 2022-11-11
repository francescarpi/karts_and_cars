import { createApp } from "vue";
import { createPinia } from "pinia";
import VuePictureSwipe from "vue3-picture-swipe";

import "@/assets/main.css";
import "aos/dist/aos.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("vue-picture-swipe", VuePictureSwipe);

app.mount("#app");
