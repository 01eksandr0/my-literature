<template>
  <ul class="flex items-center justify-center gap-5 md:mt-[16px]">
    <li>
      <router-link to="/" @click="closeMenu"
        ><v-icon
          :fill="$route.path === '/' ? '#8a8a8a' : '#fff'"
          name="gi-bookmarklet"
          scale="2.5"
      /></router-link>
    </li>
    <li>
      <router-link to="/poems" @click="closeMenu"
        ><v-icon
          :fill="$route.path === '/poems' ? '#8a8a8a' : '#fff'"
          name="bi-search-heart-fill"
          scale="2.5"
      /></router-link>
    </li>
    <li>
      <router-link to="/about-me" @click="closeMenu"
        ><v-icon
          :fill="$route.path === '/about-me' ? '#8a8a8a' : '#fff'"
          name="co-about-me"
          scale="3"
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

<script setup>
defineProps({ closeMenu: Function });
</script>
