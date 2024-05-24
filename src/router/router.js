import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
const routes = [{ name: "home-page", path: "/", component: HomePage }];
export const router = createRouter({ routes, history: createWebHistory("/") });
