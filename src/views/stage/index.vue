<template>
  <DefaultLayout>
    <nav
      class="bg-primary px-4 z-50 fixed top-0 inset-x-0 mb-48 flex justify-between"
    >
      <router-link
        to="/"
        class="text-xl font-black leading-none text-white flex items-center"
      >
        <span>CodeDen</span><span class="text-white">.</span>
      </router-link>

      <div class="flex items-center text-white text-sm">
        SIZE:
        <span
          v-for="n in stageMeasurements"
          :key="n.name"
          :class="[
            stageWidth.name == n.name
              ? 'bg-opacity-10 bg-white'
              : 'bg-transparent',
          ]"
          class="px-2 py-1 mx-1 uppercase rounded cursor-pointer hover:bg-opacity-10 hover:bg-white"
          @click="switchStageWidth(n)"
          >{{ n.name }}</span
        >
      </div>

      <div class="flex gap-8">
        <button
          class="btn hover:bg-transparent px-0 font-normal"
          @click="savepageBlock"
        >
          save
        </button>
        <router-link
          to="/stage/preview"
          class="btn hover:bg-transparent px-0 font-normal"
        >
          preview
        </router-link>
      </div>
    </nav>

    <div class="flex w-full p-4 gap-4 min-h-[85vh] h-auto mt-20 max-w-s">
      <SideMenu />
      <MainView />
    </div>

    <div
      class="fixed bottom-0 left-0 z-40 flex items-start justify-center w-full h-auto px-6 py-5 text-purple-200 bg-primary xl:hidden"
    >
      <div class="relative text-center">
        <span class="inline text-white serif">Note:</span> For the best
        experience, it is recommended to use the codeden Drag-n Drop builder on
        a screen size of 1280px or wider.
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts" setup>
import SideMenu from "@/components/stage/SideMenu.vue";
import MainView from "@/components/stage/MainView.vue";
import {
  stageMeasurements,
  stageWidth,
  switchStageWidth,
} from "../../composables/useStage";
import DefaultLayout from "../../layouts/defaultLayout.vue";
import { savepageBlock } from "../../firebase/firestore";
</script>

<style scoped></style>
