import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SearchPage from "../pages/SearchPage.vue";
import PoemPage from "../pages/PoemPage.vue";
const routes = [
  { name: "home-page", path: "/", component: HomePage },
  { name: "search-page", path: "/poems", component: SearchPage },
  { name: "poem-page", path: "/poems/:id", component: PoemPage },
];
export const router = createRouter({ routes, history: createWebHistory("/") });
