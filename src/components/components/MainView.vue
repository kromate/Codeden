<template>
  <!-- <main class="mt-10">
    <h1 class="font-bold text-xl text-gray-700 my-0 py-0">
      {{ currentComponent }}
    </h1>
    <div
      class="flex w-100 p-4 gap-2 min-h-[85vh] h-auto mt-20 max-w-full relative"
    >
      <SideBar
        @change-component="changeComponent"
        class="absolute top-0 translate-x-[-110%] z-10 transition-all ease-in xl:static xl:translate-x-0"
        :class="showComponentNav ? 'show-nav' : ''"
      />
      <div class="w-[70%] mx-auto">
        <component :is="component" />
      </div>
    </div>
    
  </main> -->

  <main
    id="main"
    class="flex flex-col flex-1 overflow-x-hidden lg:overflow-y-auto"
  >
    <div class="container px-4 mx-auto sm:px-6">
      <div class="py-8 text-center md:py-16">
        <router-link
          to="/"
          class="inline-flex items-center text-xl font-bold text-gray-700 transition-colors duration-200 transform xl:hidden md:text-2xl hover:text-blue-500"
          ><img src="/logo.png" alt="logo" class="mr-2 w-7 h-7" />
          <span class="p-1 text-xl font-black leading-none text-gray-900"
            ><span>CodeDen</span><span class="text-indigo-600">.</span></span
          ></router-link
        >
        <h1
          class="mt-2 text-xl font-medium text-gray-700 sm:flex sm:items-center sm:justify-center lg:text-3xl"
        >
          <span>Discover new components. Build amazing things. </span>
          &nbsp;
        </h1>
      </div>
      <section class="flex justify-center mb-16">
        <div class="group">
          <a
            target="_blank"
            href="https://tailgrids.com/?ref=merakiui"
            class="relative flex items-center max-w-sm p-2 space-x-4 overflow-hidden transition-colors duration-700 transform border border-gray-100 rounded-md group-hover:bg-blue-500"
            ><img
              src="https://cdn.tailgrids.com/meraki-tg.svg"
              alt=""
              class="h-20 rounded-md"
            />
            <h4 class="text-gray-600 group-hover:text-white">
              Tailwind CSS Components &amp; Templates for Startup and SaaS and
              Business Sites
            </h4>
            <span
              class="absolute bottom-0 right-0 px-2 py-1 text-xs text-white bg-blue-500 rounded-tl-md"
              >ADS</span
            ></a
          >
        </div>
      </section>
      <section>
        <h1 class="mb-6 text-2xl font-semibold text-gray-800 capitalize">
          {{ currentComponent }}
        </h1>
        <component :is="component" />
      </section>
      <div
        class="flex flex-col items-center py-6 sm:flex-row sm:justify-between"
      >
        <p class="text-gray-500 uppercase">
          © Copyright 2022 by
          <a
            href="https://github.com/"
            target="_blank"
            class="font-medium text-gray-700 underline decoration-blue-500"
            >CodeDen</a
          >
        </p>
        <div class="flex items-center mt-3 space-x-3 sm:mt-0 sm:space-x-6">
          <a
            target="_blank"
            href="https://twitter.com"
            class="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer hover:decoration-blue-500 hover:underline"
          >
            <i class="lab la-twitter w-5 h-5 sm:w-6 sm:h-6"></i>

            <span>Share on TWITTER</span></a
          >
          <a
            href="https://github.com"
            target="_blank"
            class="flex items-center space-x-3 text-sm text-gray-700 hover:underline hover:decoration-blue-500"
          >
            <i class="lab la-github w-5 h-5 full-current sm:w-6 sm:h-6"></i>
            <span>Code on GITHUB</span></a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
defineProps(["component", "currentComponent"]);
</script>

<style scoped></style>
