<template>
  <my-container>
    <div
      class="flex items-center justify-center mt-[10px] pb-[40px] xl:pb-[40px]"
    >
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white"
          aria-label="Pagination"
        >
          <button
            @click="() => page > 1 && updatePage(page - 1)"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            v-if="page > 1"
            @click="() => updatePage(page - 1)"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {{ page - 1 }}
          </button>
          <button
            aria-current="page"
            class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {{ page }}
          </button>
          <button
            v-if="page < limit"
            @click="() => updatePage(page + 1)"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {{ page + 1 }}
          </button>
          <button
            @click="() => updatePage(page + 2)"
            v-if="page + 1 < limit"
            class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            {{ page + 2 }}
          </button>
          <button
            @click="() => page < limit && updatePage(page + 1)"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Next</span>
            <svg
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </div></div
  ></my-container>
</template>

<script setup>
import { computed } from "vue";
import { usePoems } from "../../stores/poems";
const page = computed(() => usePoems().getPage);
const limit = computed(() => usePoems().getLimit);

const updatePage = (newPage) => {
  usePoems().updatePage(newPage);
};
</script>

<style lang="css" scoped></style>
