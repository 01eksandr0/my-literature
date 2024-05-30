<template>
  <section class="pt-[20px] pb-[20px] xl:pb-[40px]">
    <my-container
      ><div>
        <ul
          class="flex flex-col items-center gap-10 md:flex-wrap md:flex-row xl:gap-12 xl:justify-center"
        >
          <li v-for="item in poems" :key="item._id">
            <swiper-item :item="item" />
          </li>
        </ul></div
    ></my-container>
  </section>
</template>

<script setup>
import SwiperItem from "../SwiperItem/SwiperItem.vue";
import { usePoems } from "../../stores/poems.js";
import { computed } from "vue";
const poems = computed(() => usePoems().getPoems);
</script>

<style lang="css" scoped></style>
