import { createApp } from "vue";
import "tailwindcss/tailwind.css";
import "./style.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import App from "./App.vue";
import { router } from "./router/router";
import components from "./components/UI/index.js";
import {
  GiBookmarklet,
  BiSearchHeartFill,
  CoAboutMe,
  BiInstagram,
  BiLinkedin,
  FaTelegram,
  IoArrowBackCircleOutline,
} from "oh-vue-icons/icons";
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia();
addIcons(
  GiBookmarklet,
  BiSearchHeartFill,
  CoAboutMe,
  BiInstagram,
  BiLinkedin,
  FaTelegram,
  IoArrowBackCircleOutline
);
components.forEach((component) => {
  app.component(component.name, component);
});
app.component("v-icon", OhVueIcon);
app.use(router).use(pinia).mount("#app");
