<template>
	<draggable
		class="w-full card ml-56"
		:list="list2"
		group="people"
		@change="checkMove"
		itemKey="name"
	>
		<template #item="{ element, index }">
			<div class="w-full card ml-56 ">
				{{element}} -------- {{index}}
		
			</div>
		</template>
	</draggable>
	<!-- <div class="w-full card ml-56 ">

		
	</div> -->
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
const checkMove = (el)=>{
	console.log(el)
}

const list2 = [0]
</script>

<style  scoped>

</style>