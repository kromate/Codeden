<template>
	<draggable 
		:list="list"
		:disabled="!enabled"
		item-key="name"
		class="list-group"
		ghost-class="ghost"
		:move="checkMove"
		@start="drag = true"
		@end="drag = false"
	>
		<template #item="{  }">
			<div class="list-group-item" :class="{ 'not-draggable': !enabled }">
				<img src="./one/image.png" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover mt-2" >
			</div>
		</template>
	
	</draggable>
	
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
const drag = false
const checkMove = (el)=>{
	console.log(el)
}
const enabled = false
const list = [1,2,3,4,5,6,7,8,9,10]
</script>

<style  scoped>

</style>