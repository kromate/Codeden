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

]

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