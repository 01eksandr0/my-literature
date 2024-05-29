<template>
  <div class="relative inline-block w-[100px]">
    <div
      @click="toggleDropdown"
      class="bg-white border border-gray-300 rounded shadow p-2 flex justify-between items-center cursor-pointer"
    >
      <span>{{ selectedOption ? selectedOption.label : "Сортувати" }}</span>
    </div>
    <div
      v-if="isOpen"
      class="absolute z-10 mt-1 bg-white border border-gray-300 rounded shadow w-full"
    >
      <ul>
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="p-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedOption = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  emit("update:modelValue", option.value);
  isOpen.value = false;
};
</script>
