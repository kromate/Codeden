<template>
  <div>
    <div v-for="n of blockDate" :key="n.name">
      <component :is="n.comp" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FolderComp } from "@/composables/useFileSystem";
import { onMounted, shallowRef } from "vue";

const blockDate = shallowRef();
onMounted(async () => {
  blockDate.value = await FolderComp("Dropdowns");
});
</script>
