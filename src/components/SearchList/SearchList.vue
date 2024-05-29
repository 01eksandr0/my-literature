<template>
  <section class="pt-[20px] pb-[20px] xl:pb-[40px]">
    <my-container
      ><div>
        <ul
          class="flex flex-col items-center gap-10 md:flex-wrap md:flex-row xl:gap-12 xl:justify-center"
        >
          <li v-for="item in list" :key="item._id">
            <swiper-item :item="item" />
          </li>
        </ul></div
    ></my-container>
  </section>
</template>

<script setup>
import SwiperItem from "../SwiperItem/SwiperItem.vue";
const list = [
  { _id: 1 },
  { _id: 2 },
  { _id: 3 },
  { _id: 4 },
  { _id: 5 },
  { _id: 6 },
];
</script>

<style lang="css" scoped></style>
