<template>
  <component :is="n.comp" v-for="n of blockDate" :key="n.name" />
</template>

<script lang="ts" setup>
import { getNavigationComp } from "@/composables/useFileSystem";
import { ref, onMounted } from "vue";

const blockDate = ref();
onMounted(async () => {
  blockDate.value = await getNavigationComp();
});
</script>
