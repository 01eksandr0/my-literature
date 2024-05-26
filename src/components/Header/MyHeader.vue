<template>
  <header class="bg-black h-20 w-screen">
    <my-container>
      <mobail-header v-if="isMobail" />
      <desktop-header v-else
    /></my-container>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MobailHeader from "../MobailHeader/MobailHeader.vue";
import DesktopHeader from "../DesktopHeader/DesktopHeader.vue";
const isMobail = ref(false);
onMounted(() => {
  if (parseInt(getComputedStyle(document.querySelector("body")).width) < 768)
    isMobail.value = true;
});
</script>
