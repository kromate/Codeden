<template>

	<draggable
		class="w-full card ml-56 "
		:list="addedComp"
		group="people"
		@add="log"
		itemKey="id"
	>
		<template #item="{ element }">
			<div class="hover:scale-[1.01] hover:ring-4 ring-opacity-0 hover:ring-opacity-50 rounded-lg py-1">
				<component :is="{...element.comp}"/>
			</div>
		
		</template>
	</draggable>

	<!-- <div class="w-full card ml-56 ">
block-container relative w-full transition duration-300 ease transform 
overflow-visible z-0 scale-100 hover:scale-102 hover:z-10 ring-indigo-300 bg-white rounded-lg hover:overflow-hidden ring-4 ring-opacity-0 hover:ring-opacity-50
		
	</div> -->
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'

// const order = 1 


const addedComp = ref([])

const log = (evt)=> {
	if(evt.added){
		addedComp.value.push(evt.added.element)
		console.log(addedComp)
	}
	
}


</script>

<style  scoped>

</style>