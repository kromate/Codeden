<template>
  <main class="mt-10">
    <h1 class="font-bold text-xl text-gray-700 my-0 py-0">
      {{ currentComponent }}
    </h1>
    <div
      class="flex w-100 p-4 gap-2 min-h-[85vh] h-auto mt-20 max-w-full relative"
    >
      <SideMenu
        @change-component="changeComponent"
        class="absolute top-0 translate-x-[-110%] z-10 transition-all ease-in xl:static xl:translate-x-0"
        :class="showComponentNav ? 'show-nav' : ''"
      />
      <div class="w-[70%] mx-auto">
        <component :is="component" />
      </div>
    </div>
    <button
      type="button"
      class="fixed z-50 flex items-center justify-center p-3 text-white bg-gray-900 rounded-full focus:outline-none xl:hidden bottom-24 right-8"
      @click="showNav"
    >
      <span class="sr-only">Open site navigation</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8"
      >
        <path
          d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
          fill="currentColor"
        ></path>
      </svg>
      <!---->
    </button>
  </main>
</template>

<script lang="ts" setup>
import SideMenu from "./SideMenu.vue";
import { onMounted, shallowRef, ref } from "vue";
const currentComponent = ref("Navigations");
// import Navigation from "../../../componentBlocks/Navigations/index.vue";
const component = shallowRef();
const showComponentNav = ref(false);

onMounted(async () => {
  const block = await import(
    `../../../componentBlocks/${currentComponent.value}/index.vue`
  );
  component.value = block.default;
});

const changeComponent = async (name) => {
  currentComponent.value = name;
  const block = await import(
    `../../../componentBlocks/${currentComponent.value}/index.vue`
  );
  component.value = block.default;
};

const showNav = () => {
  showComponentNav.value = !showComponentNav.value;
};
</script>

<style scoped>
.show-nav {
  @apply translate-x-0;
}
</style>
