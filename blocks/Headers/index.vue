<template>
	<div v-for="n in blockDate"  :key="n.index" class="w-full">
		<img :src="n.img" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover"  @load="n.imgLoaded = true">
		<SkeletonLoader v-if="!n.imgLoaded" height="100px" width="100%" radius="6px"/>
	</div>
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockHeaders} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'
import SkeletonLoader from '@/components/core/SkeletonLoader.vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockHeaders()
} )
</script>

<style  scoped>

</style>