<template>
  <div class="mb-16">
    <div
      class="top flex flex-col md:flex-row items-center justify-between px-2 items-center"
    >
      <div class="flex items-center">
        <h3 class="md:text-lg capitalize text-gray-700">
          {{ componentName }}
        </h3>
      </div>

      <div
        class="flex justify-between gap-3 items-center mt-4 space-x-0 md:mt-0"
      >
        <button
          aria-label="View code snippet"
          class="transition-colors duration-200 ease-in-out focus:outline-none p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none bg-gray-200 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </button>
        <button
          aria-label="Copy"
          class="transition-colors duration-200 ease-in-out focus:outline-none p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      class="flex items-center justify-center mt-4 overflow-hidden bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900 py-6 px-2"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  componentName: String,
});
</script>
