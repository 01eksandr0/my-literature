import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import PoemPage from "../pages/PoemPage.vue";
import AboutPage from "../pages/AboutPage.vue";
const routes = [
  { name: "home-page", path: "/", component: HomePage },
  { name: "search-page", path: "/poems", component: SearchPage },
  { name: "poem-page", path: "/poems/:id", component: PoemPage },
  { name: "about-page", path: "/about-me", component: AboutPage },
];
export const router = createRouter({ routes, history: createWebHistory("/") });
