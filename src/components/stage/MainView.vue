<template>

	<draggable
		class="w-full card ml-56 "
		:list="addedComp"
		group="people"
		@change="log"
		itemKey="id"
	>
		<template #item="{ element, index }">
			<div class="list-group-item w-full bg-primary mt-3">{{ element.name }} {{ index }}</div>
		</template>
	</draggable>

	<!-- <div class="w-full card ml-56 ">

		
	</div> -->
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'

// const order = 1 


const addedComp = [
	// {name:'test', id:6}
]

const log = (evt)=> {
	if(evt.added){
		addedComp.push(evt.added.element)
		console.log(addedComp)
	}
	
}


</script>

<style  scoped>

</style>