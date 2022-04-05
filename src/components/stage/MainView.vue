<template>

	<draggable
		class="w-full card ml-56 "
		:list="addedComp"
		group="people"
		@add="log"
		itemKey="id"
	>
		<template #item="{ element }">
			<div class="hover:scale-[1.01] hover:z-[100000] hover:ring-4 ring-opacity-0 hover:ring-opacity-50 rounded-lg ring-primary transition duration-300 ease transform ">
				<component :is="{...element.comp}"/>
			</div>
		
		</template>
	</draggable>

	<!-- <div class="w-full card ml-56 ">

		
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