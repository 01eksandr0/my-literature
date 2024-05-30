<template>
  <section class="bg-neutral-300 pt-[20px] pb-[40px]">
    <my-container>
      <div class="flex flex-col gap-2">
        <button class="text-start" @click="$router.back()">
          <v-icon name="io-arrow-back-circle-outline" />Назад
        </button>
        <h2 class="text-xl font-semibold text-center">
          {{ poem.title || "***" }}
        </h2>
        <p
          class="text-xl ml-auto mr-auto"
          v-html="formatText(poem.text)"
        ></p></div
    ></my-container>
  </section>
</template>

<script setup>
import { formatText } from "../helpers/textFormat.js";
import { useRoute } from "vue-router";
import { usePoems } from "../stores/poems";
const poem = usePoems().getPoems.find((i) => i._id === useRoute().params.id);
</script>

<style lang="css" scoped></style>
