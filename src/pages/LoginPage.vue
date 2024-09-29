<template>
  <div class="h-screen w-screen bg-black flex items-center justify-center">
    <div
      class="flex flex-col items-center h-[290px] w-[300px] bg-white rounded-xl p-[20px]"
    >
      <h2 class="text-2xl">Увійти</h2>
      <label class="w-full block mb-[15px]">
        Логін
        <input
          v-model="login"
          placeholder="Ваш логін"
          class="border w-full block rounded-lg mt-[6px] h-[38px] border-gray-300 px-[15px]"
          type="text"
        />
      </label>
      <label class="w-full block mb-[20px]">
        Пароль
        <input
          v-model="password"
          placeholder="Ваш пароль"
          class="border block w-full rounded-lg h-[38px] mt-[6px] border-gray-300 px-[15px]"
          type="password"
        />
      </label>
      <button
        @click="loginCheck"
        class="border w-full flex items-center justify-center rounded-lg h-[38px] border-gray-300 hover:bg-gray-50 duration-300"
      >
        Увійти
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const login = ref("");
const password = ref("");

const loginCheck = () => {
  if (login.value === "admin" && password.value === "dead2003") {
    router.replace("/admin");
  } else {
    alert("Невірний логін або пароль");
  }
};
</script>

<style lang="scss" scoped></style>
