<template>

	<draggable
		class="list-group"
		:list="list1"
		group="people"
		@change="log"
		itemKey="name"
	>
		<template #item="{ element, index }">
			<div class="list-group-item">{{ element.name }} {{ index }}</div>
		</template>
	</draggable>


</template>

<script lang="ts" >
import draggable from 'vuedraggable'
export default {
	name: 'two-lists',
	display: 'Two Lists',
	order: 1,
	components: {
		draggable
	},
	data() {
		return {
			list1: [
				{ name: 'John', id: 1 },
				{ name: 'Joao', id: 2 },
				{ name: 'Jean', id: 3 },
				{ name: 'Gerard', id: 4 }
			],
			list2: [
				{ name: 'Juan', id: 5 },
				{ name: 'Edgard', id: 6 },
				{ name: 'Johnson', id: 7 }
			]
		}
	},
	methods: {
		add: function() {
			this.list.push({ name: 'Juan' })
		},
		replace: function() {
			this.list = [{ name: 'Edgard' }]
		},
		clone: function(el) {
			return {
				name: el.name + ' cloned'
			}
		},
		log: function(evt) {
			window.console.log(evt)
		}
	}
}
</script>

<style  scoped>

</style>