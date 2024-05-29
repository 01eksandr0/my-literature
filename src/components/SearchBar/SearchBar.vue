<template>
  <section class="bg-neutral-300 pt-[20px] pb-[20px]">
    <my-container>
      <div class="flex items-center justify-between">
        <input
          class="bg-white border border-gray-300 rounded shadow p-2 flex justify-between items-center outline-none hover:border-gray-600 duration-300 ease-linear"
        /><custom-select :options="options" v-model="selectedValue" />
      </div>
    </my-container>
  </section>
</template>

<script setup>
import { ref } from "vue";
import CustomSelect from "../CustomSelect.vue";
const options = ref([
  { label: "Нові", value: "2" },
  { label: "Старі", value: "3" },
]);
const selectedValue = ref(null);
</script>

<style lang="css" scoped></style>
