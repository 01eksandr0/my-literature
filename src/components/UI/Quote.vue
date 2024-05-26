<template>
  <section class="pt-[20px] pb-[20px] w-screen bg-black">
    <my-container>
      <div>
        <p class="text-white text-xl italic xl:text-2xl">"{{ text }}"</p>
        <p class="text-white text-end">{{ author }}</p>
      </div>
    </my-container>
  </section>
</template>

<script setup>
defineProps({ text: String, author: String });
defineOptions({
  name: "my-quote",
});
</script>
