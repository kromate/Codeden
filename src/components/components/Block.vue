<template>
  <div :name="componentName">
    <div class="mb-16">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div class="flex items-center">
          <h3 class="text-gray-700 capitalize md:text-lg">
            {{ componentName }}
          </h3>
        </div>
        <div class="flex items-center mt-4 space-x-4 md:mt-0">
          <button
            aria-label="Rtl"
            class="transition-colors duration-200 ease-in-out focus:outline-none p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 bg-gray-200 text-gray-600"
          >
            <i class="las la-exchange-alt"></i>
           
          </button>
          <button
            aria-label="dark mode button"
            class="transition-colors duration-200 ease-in-out focus:outline-none p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400"
          >
            <i class="las la-moon"></i>
            
          </button>
          <button
            aria-label="View code snippet"
            class="transition-colors duration-200 ease-in-out focus:outline-none p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 bg-gray-200 text-gray-600"
          >
            <i class="las la-code"></i>
            
          </button>
          <button
            aria-label="Copy"
            class="transition-colors duration-200 ease-in-out focus:outline-none p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400"
          >
            <i class="las la-clipboard"></i>
            
          </button>
        </div>
      </div>
      <div class="">
        <div
          class="flex items-center justify-center mt-4 overflow-hidden bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900"
        >
          <div dir="ltr" class="relative w-full">
            <div class="px-3 py-6">
              <slot />
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  componentName: String,
});
</script>
