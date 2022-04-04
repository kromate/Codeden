<template>

	<draggable
		class="w-full card ml-56 "
		:list="addedComp"
		group="people"
		@change="log"
		itemKey="id"
	>
		<template #item="{ element }">
			<component :is="element.comp"/>

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