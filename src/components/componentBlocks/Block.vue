<template>
  <div
    class="component-wrapper max-w-full py-2.5 bg-white rounded-lg shadow-lg my-3.5 mx-auto"
  >
    <div class="top flex justify-between px-2 items-center">
      <h2 class="font-medium capitalize">{{ componentName }}</h2>

      <div>
        <button
          class="mx-2 inline-flex justify-center items-center rounded-md font-semibold"
        >
          snippet
        </button>
        <button
          class="mx-2 inline-flex justify-center items-center rounded-md font-semibold"
        >
          copy
        </button>
      </div>
    </div>
    <section class="w-100 shadow-inner shadow-sm m-px">
      <slot />
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  componentName: String,
});
</script>
