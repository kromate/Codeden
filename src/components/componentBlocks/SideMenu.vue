<template>
  <div
    class="w-40 h-fit rounded-xl flex flex-col items-start py-5 px-5 gap-2 z-30 justify-start bg-white shadow-lg"
  >
    <span
      class="self-start text-sm leading-6 inline-block text-slate-500 px-2 py-1 rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
      v-for="n in Block"
      :key="n.name"
      @click="$emit('changeComponent', n.name)"
      >{{ n.name }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import { readComp } from "../../composables/useFileSystem";

const Block = readComp();
console.log(Block);
</script>

<style scoped></style>
