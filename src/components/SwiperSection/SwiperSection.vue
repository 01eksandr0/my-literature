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
onMounted(() => {
  const width = parseInt(
    getComputedStyle(document.querySelector("body")).width
  );
  if (width > 767) swiperQuantity.value = 2;
  if (width > 1279) swiperQuantity.value = 3;
});

const list = [
  {
    title: "Слова надіі",
    _id: "1",
    date: "22-02-2021",
    text: `Хотіли люди собою бути<br>
А їм дороги не дали<br>
Нехай лунає відовсюду<br>
Що тут немає доброти<br>
Нехай усі про все все знають<br>
Нехай хочь і в глуші<br>
Настане ніч ніч жалю<br>
коли усі побіжуть в кущі`,
    poster: `Хотіли люди собою бути<br>
А їм дороги не дали<br>
Нехай лунає відовсюду<br>
Що тут немає доброти<br>
Нехай усі про все все знають<br>
Нехай хочь і в глуші...<br>`,
  },
  {
    title: "",
    _id: "2",
    date: "22-02-2021",
    text: `За щастя можу відповісти
  За кохання можу сісти
  За твоі очі неймовірні
  Можу гору зрушити з місця
  За твій легкий дотепний говір
  Я б поіхав у Житомир`,
    poster: `За щастя можу відповісти<br>
  За кохання можу сісти<br>
  За твоі очі неймовірні<br>
  Можу гору зрушити з місця<br>
  За твій легкий дотепний говір<br>
  Я б поіхав у Житомир...`,
  },
  {
    title: "",
    _id: "3",
    date: "22-02-2021",
    text: `За щастя можу відповісти
  За кохання можу сісти
  За твоі очі неймовірні
  Можу гору зрушити з місця
  За твій легкий дотепний говір
  Я б поіхав у Житомир`,
    poster: `За щастя можу відповісти<br>
  За кохання можу сісти<br>
  За твоі очі неймовірні<br>
  Можу гору зрушити з місця<br>
  За твій легкий дотепний говір<br>
  Я б поіхав у Житомир...`,
  },
  {
    title: "",
    _id: "4",
    date: "22-02-2021",
    text: `За щастя можу відповісти
  За кохання можу сісти
  За твоі очі неймовірні
  Можу гору зрушити з місця
  За твій легкий дотепний говір
  Я б поіхав у Житомир
  Щоб нарвати тобі квітів
  Духмяних, жовтих, синіх, літніх`,
    poster: `За щастя можу відповісти<br>
  За кохання можу сісти<br>
  За твоі очі неймовірні<br>
  Можу гору зрушити з місця<br>
  За твій легкий дотепний говір<br>
  Я б поіхав у Житомир...`,
  },
];
</script>

<style lang="css" scoped>
.my-swiper {
  height: 320px;
}
</style>
