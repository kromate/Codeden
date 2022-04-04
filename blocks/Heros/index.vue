<template>
	<div v-for="n in blockDate"  :key="n.index" class="w-full">
		<img :src="n.img" :alt="n.name" class="rounded-md w-full shadow-xl object-cover"  @load="n.imgLoaded = true">
		<SkeletonLoader v-if="!n.imgLoaded" height="100px" width="100%" radius="6px"/>
	</div>
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockHeros} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockHeros()
} )
</script>

<style  scoped>

</style>