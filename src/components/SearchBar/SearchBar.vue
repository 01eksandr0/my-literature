<template>
  <section class="bg-neutral-300 pt-[20px] pb-[20px]">
    <my-container>
      <div class="flex items-center justify-between">
        <input
          class="bg-white border border-gray-300 rounded shadow p-2 flex justify-between items-center outline-none hover:border-gray-600 duration-300 ease-linear"
          placeholder="Search"
          v-model.trim="query"
        /><custom-select :options="options" v-model="selectedValue" />
      </div>
    </my-container>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import CustomSelect from "../CustomSelect.vue";
import { usePoems } from "../../stores/poems.js";
const options = ref([
  { label: "Нові", value: "2" },
  { label: "Старі", value: "3" },
]);
const selectedValue = ref(null);
const query = ref("");
watch(query, (newQuery) => {
  usePoems().updateQuery(newQuery.toLowerCase());
  usePoems().updatePage(1);
});
</script>

<style lang="css" scoped></style>
