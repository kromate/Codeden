<template>
	<draggable
		class="list-group"
		:list="list2"
		group="people"
		@change="checkMove"
		itemKey="name"
	>
		<template #item="{  }">
			<div class="w-full card ml-56 ">

		
			</div>
		</template>
	</draggable>
	<div class="w-full card ml-56 ">

		
	</div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
const checkMove = (el)=>{
	console.log(el)
}

const list2 = [1,2,3,4,5,6,7,8,9,10]
</script>

<style  scoped>

</style>