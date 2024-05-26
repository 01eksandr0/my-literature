<template>
  <ul class="flex items-center justify-center gap-5 md:mt-[16px]">
    <li>
      <router-link to="/"
        ><v-icon
          :class="{
            'text-white': true,
            'text-gray-400': $route.path === '/',
          }"
          name="gi-bookmarklet"
          scale="2.5"
      /></router-link>
    </li>
    <li>
      <router-link to="/"
        ><v-icon class="text-white" name="bi-search-heart-fill" scale="2.5"
      /></router-link>
    </li>
    <li>
      <router-link to="/"
        ><v-icon class="text-white" name="co-about-me" scale="3"
      /></router-link>
    </li>
  </ul>
  <ul class="flex items-center justify-center gap-5 mt-[16px]">
    <li>
      <a href=""
        ><v-icon name="bi-instagram" class="text-white" scale="2.5"
      /></a>
    </li>
    <li>
      <a href=""
        ><v-icon name="bi-linkedin" class="text-white" scale="2.5"
      /></a>
    </li>
    <li>
      <a href=""
        ><v-icon name="fa-telegram" class="text-white" scale="2.5"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "nav-links",
};
</script>

<style lang="css" scoped></style>
