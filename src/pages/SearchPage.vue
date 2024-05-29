<template>
  <div class="bg-neutral-300">
    <search-bar />
    <search-list />
    <pagination />
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar/SearchBar.vue";
import SearchList from "../components/SearchList/SearchList.vue";
import Pagination from "../components/Pagination/Pagination.vue";
</script>
