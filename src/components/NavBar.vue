<template>
  <nav class="relative z-30 h-24 select-none">
    <div
      class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 md:overflow-visible"
    >
      <div class="flex items-center justify-start w-1/4 h-full pr-4">
        <router-link to="/" class="py-4 md:py-0 flex items-center">
          <span class="p-1 text-xl font-black leading-none text-gray-900"
            ><span>CodeDen</span><span class="text-indigo-600">.</span></span
          >
        </router-link>
      </div>

      <transition name="slideUp">
        <div v-if="showMenu" class="w-full gap-4">
          <router-link
            to="/pageBlock"
            class="btn rounded-none py-3 w-full"
            v-if="user"
            >Pages</router-link
          >
          <button
            class="btn rounded-none py-3 w-full mt-2"
            @click="user ? signOutUser() : googleAuth()"
          >
            {{ user ? "Log Out" : "Login" }}
          </button>
        </div>
      </transition>

      <div class="flex gap-4">
        <router-link to="/pageBlock" class="btn pc py-3" v-if="user"
          >Pages</router-link
        >
        <button
          class="btn pc py-3"
          @click="user ? signOutUser() : googleAuth()"
        >
          {{ user ? "Log Out" : "Login" }}
        </button>
      </div>

      <div
        @click="showMenu = !showMenu"
        class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
      >
        <svg
          class="w-6 h-6 text-gray-700"
          v-if="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          x-cloak=""
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg
          class="w-6 h-6 text-gray-700"
          v-if="showMenu"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          x-cloak=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { googleAuth, signOutUser } from "../firebase/auth";
import { useUser } from "../composables/useGlobals";

const { user } = useUser();

const showMenu = ref(false);
</script>

<style scoped>
.slideUp-enter-from,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.75s ease;
}
</style>
