<template>

	<draggable
		class="list-group"
		:list="[...blockDate, ...blockDate, ...blockDate]"
		group="people"
		@change="log"
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
import {getBlockHeaders} from '@/composables/useFileSystem'
import draggable from 'vuedraggable'
import { ref, onMounted } from 'vue'
import SkeletonLoader from '@/components/core/SkeletonLoader.vue'


const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockHeaders()
} )
// const order = 1 


// const add= function() {
// 	this.list.push({ name: 'Juan' })
// }
// const replace = function() {
// 	this.list = [{ name: 'Edgard' }]
// }
// const clone = function(el) {
// 	return {
// 		name: el.name + ' cloned'
// 	}
// }
const log = function(evt) {
	window.console.log(evt)
}


</script>

<style  scoped>

</style>