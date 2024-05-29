<template>
  <div class="my-container"><slot></slot></div>
</template>

<script setup>
defineOptions({
  name: "my-container",
});
</script>

<style lang="css" scoped>
.my-container {
  padding: 0 20px;
  margin: 0 auto;
}
@media screen and (min-width: 375px) {
  .my-container {
    width: 375px;
  }
}
@media screen and (min-width: 768px) {
  .my-container {
    padding: 0 40px;
    width: 768px;
  }
}
@media screen and (min-width: 1280px) {
  .my-container {
    padding: 0 80px;
    width: 1280px;
  }
}
</style>
