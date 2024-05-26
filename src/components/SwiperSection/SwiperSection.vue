<template>
  <section
    class="bg-neutral-300 h-[300px] w-screen pt-[20px] pb-[20px] xl:h-[400px] xl:pt-[50px]"
  >
    <my-container>
      <swiper
        :slides-per-view="swiperQuantity"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :modules="[Pagination]"
        class="my-swiper"
      >
        <swiper-slide v-for="item in list" :key="item._id"
          ><swiper-item :item="item"
        /></swiper-slide>
      </swiper>
    </my-container>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import SwiperItem from "../SwiperItem/SwiperItem.vue";
import "swiper/css";
import "swiper/css/pagination";
const swiperQuantity = ref(1);

defineProps({ list: Array });

onMounted(() => {
  const width = parseInt(
    getComputedStyle(document.querySelector("body")).width
  );
  if (width > 767) swiperQuantity.value = 2;
  if (width > 1279) swiperQuantity.value = 3;
});
</script>

<style lang="css" scoped>
.my-swiper {
  height: 285px;
}

@media screen and (min-width: 1280px) {
  .my-swiper {
    height: 320px;
  }
}
::v-deep .swiper-pagination-bullet {
  background-color: #fff;
  opacity: 1;
}

::v-deep .swiper-pagination-bullet-active {
  background-color: #4d4d4d;
}
</style>
