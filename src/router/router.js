import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SearchPage from "../pages/SearchPage.vue";
const routes = [
  { name: "home-page", path: "/", component: HomePage },
  { name: "search-page", path: "/poems", component: SearchPage },
];
export const router = createRouter({ routes, history: createWebHistory("/") });
