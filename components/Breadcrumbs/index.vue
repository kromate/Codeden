<template>
  <component :is="n.comp" v-for="n of blockDate" :key="n.name" />
</template>

<script lang="ts" setup>
import { getBreadcrumbComp } from "@/composables/useFileSystem";
import { onMounted, shallowRef } from "vue";

const blockDate = shallowRef();
onMounted(async () => {
  blockDate.value = await getBreadcrumbComp();
});
</script>
