<template>
  <div
    class="h-[250px] bg-slate-100 rounded-md pt-[10px] pb-[10px] pl-[20px] pr-[20px] w-[310px] ml-auto mr-auto"
  >
    <h2 class="text-zinc-600 text-xl text-center">{{ item.title || "***" }}</h2>

    <p class="text-lg ml-[4px] h-[174px]">
      <span v-html="item.poster"></span>
    </p>

    <div class="flex items-center justify-between">
      <p>{{ item.date }}</p>
      <router-link to="/">Читати повністю</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object });
</script>
