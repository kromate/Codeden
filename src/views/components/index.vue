<template>
  <DefaultLayout>
    <section class="w-full px-6 pb-12 antialiased bg-white bg">
      <div class="mx-auto container">
        <NavBar />
        <div
          class="container py-24 md:py-36 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] tracking-normal text-left text-gray-900 md:text-center sm:leading-none"
          >
            <span class="inline md:block"
              >Open-Source component collection</span
            >
            <span
              class="relative mt-2 bg-clip-text gradient md:inline-block pl-3"
            >
              Coming Soon</span
            >
          </h1>
          <div
            class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-4xl md:text-center lg:text-lg"
          >
            Find Components with different styles and logic behind them, think
            codepen but for only components with specific categories and search
          </div>
          <div class="flex flex-col items-center text-center">
            <div
              class="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center rounded-md border-2 border-primary"
            >
              <input
                disabled
                type="text"
                name="search"
                placeholder="Search components"
                class="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none cursor-not-allowed"
              />
              <span class="relative top-0 right-0 block">
                <button
                  type="button"
                  disabled
                  class="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 focus:outline-none active:bg-indigo-700 cursor-not-allowed"
                >
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import DefaultLayout from "../../layouts/defaultLayout.vue";
</script>

<style scoped>
.bg {
  background-blend-mode: lighten;
}

.gradient {
  text-align: center;
  color: #4f46e5;
  background-image: -webkit-linear-gradient(92deg, #3426f3, #feab3a);
  background-clip: text;
  text-fill-color: transparent;
  animation: hue 10s infinite linear;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
