<template>
  <component :is="n.comp" v-for="n of blockDate" :key="n.name" />
</template>

<script lang="ts" setup>
import { getTeamComp } from "@/composables/useFileSystem";
import { onMounted, shallowRef } from "vue";

const blockDate = shallowRef();
onMounted(async () => {
  blockDate.value = await getTeamComp();
});
</script>
