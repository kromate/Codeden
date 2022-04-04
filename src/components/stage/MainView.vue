<template>

	<draggable
		class="w-full card ml-56 "
		:list="list2"
		group="people"
		@change="log"
		itemKey="name"
	>
		<template #item="{ element, index }">
			<div class="list-group-item">{{ element.name }} {{ index }}</div>
		</template>
	</draggable>

	<!-- <div class="w-full card ml-56 ">

		
	</div> -->
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'

// const order = 1 


const list2 = [
	{ name: 'Juan', id: 5 },
	{ name: 'Edgard', id: 6 },
	{ name: 'Johnson', id: 7 }
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