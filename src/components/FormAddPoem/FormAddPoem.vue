<template>
  <teleport to="body">
    <div
      class="fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
    >
      <div class="rounded bg-white" style="width: calc(80vw)">
        <div
          class="p-[10px] px-[20px] flex items-center justify-between border-b"
        >
          <h2 class="font-bold">Додати вірш</h2>
          <button @click="$emit('close')">+</button>
        </div>
        <div
          class="p-[20px] flex flex-col gap-[10px] overflow-auto"
          style="max-height: calc(50vh)"
        >
          <label class="w-full flex flex-col gap-[6px]">
            Заголовок
            <input
              placeholder="Введіть заголовок"
              class="w-full border border-gray-400 rounded h-[40px] px-[15px]"
              type="text"
            />
          </label>
          <label class="w-full flex flex-col gap-[6px]">
            Текст
            <textarea
              placeholder="Введіть текст віршу"
              class="w-full border border-gray-400 rounded h-[100px] px-[15px] py-[10px] resize-none"
            ></textarea>
          </label>
          <label class="w-full flex flex-col gap-[6px]">
            Превью
            <textarea
              placeholder="Введіть превью віршу"
              class="w-full border border-gray-400 rounded h-[100px] px-[15px] py-[10px] resize-none"
            ></textarea>
          </label>
          <label class="w-full flex flex-col gap-[6px]">
            Дата
            <input
              type="date"
              class="w-full border border-gray-400 rounded h-[40px] px-[15px]"
            />
          </label>
        </div>
        <div class="p-[10px] px-[20px] flex items-center justify-end border-t">
          <button
            class="bg-white border border-gray-300 rounded shadow p-2 flex justify-between items-center outline-none hover:bg-gray-100 duration-300 ease-linear"
          >
            Додати
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup></script>

<style lang="scss" scoped></style>
