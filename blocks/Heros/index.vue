<template>
	<draggable
		class="w-full"
		:list="blockDate"
		group="people"
		itemKey="name"
	>
		<template #item="{ element }">
			<div class="w-full mt-5">
				<img :src="element.img" :alt="element.name" class="rounded-md w-full shadow-xl object-cover"  @load="element.imgLoaded = true">
				<SkeletonLoader v-if="!element.imgLoaded" height="100px" width="100%" radius="6px"/>
			</div>
		</template>
	</draggable>
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockHeros} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'
import draggable from 'vuedraggable'
import SkeletonLoader from '@/components/core/SkeletonLoader.vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockHeros()
})
</script>

<style  scoped>

</style>

