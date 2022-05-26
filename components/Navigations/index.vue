<template>
	<div>
		<component :is="n.comp" v-for="n of blockDate" :key="n.name" />
	</div>
</template>

<script lang="ts" setup>
import { FolderComp } from "@/composables/useFileSystem";
import { onMounted, shallowRef } from "vue";

const blockDate = shallowRef();
onMounted(async () => {
  blockDate.value = await FolderComp('Navigations');
});
</script>
