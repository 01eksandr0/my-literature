<template>
  <div class="relative flex items-center justify-center h-20">
    <button class="relative h-[30px] w-[30px]" @click="isOpen = !isOpen">
      <span :class="{ 'line-left': true, 'line-left-active': isOpen }"></span
      ><span
        :class="{ 'line-right': true, 'line-right-active': isOpen }"
      ></span>
    </button>
    <div :class="{ 'mobail-menu': true, 'mobail-menu-active': isOpen }">
      <nav-links />
    </div>
  </div>
</template>

<script setup>
import NavLinks from "../NavLinks/NavLinks.vue";
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style lang="css" scoped>
.line-left,
.line-right {
  position: absolute;
  height: 4px;
  width: 45px;
  background-color: #fff;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  transition: all 300ms linear;
  z-index: 30;
}
.line-left {
  top: 5px;
}
.line-right {
  bottom: 0px;
}
.line-left-active {
  transform: rotate(45deg) translateX(-50%);
  top: 26px;
}
.line-right-active {
  transform: rotate(-45deg) translateX(-50%);
  bottom: 32px;
}
.mobail-menu {
  height: 200px;
  position: absolute;
  padding-top: 20px;
  width: 100vw;
  background-color: #000;
  z-index: 20;
  top: 80px;
  border-top: 1px solid #fff;
  transition: transform 300ms linear;
  transform: translateY(-140%);
}
.mobail-menu-active {
  transform: translateY(0);
}
</style>
