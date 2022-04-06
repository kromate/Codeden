<template>

	<draggable
		class="w-full card ml-56 "
		:list="stagedComp"
		group="people"
		@change="log"
		itemKey="id"
	>
		<template #item="{ element, index }">
			<div class="hover:scale-[1.01] hover:mb-2 hover:ring-4 ring-opacity-0 hover:ring-opacity-50 rounded-lg ring-primary transition duration-300 ease transform ">
				<component :is="{...element.comp}" class="hover:rounded-lg"/>
				<div class="absolute bottom-0 left-0 z-40 px-4 py-2 mb-4 ml-3 text-xs font-medium text-indigo-600 transition duration-150 ease-out bg-white border border-gray-200 rounded-full shadow-lg opacity-0 block-action">Hero 1</div>
				<div class="absolute bottom-0 right-0 z-50 flex mb-4 mr-3 opacity-0 action">
					<div @click="delBlock(index)" class="flex items-center justify-center w-10 h-10 mr-2 text-red-500 transition duration-150 ease-out bg-white border border-gray-200 rounded-full shadow-xl opacity-100 cursor-pointer">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
						</svg>
					</div>
				</div>
			</div>
		
		</template>
	</draggable>

	<!-- <div class="w-full card ml-56 ">

		
	</div> -->
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import {stagedComp} from '@/composables/useStage'

const log = (evt)=> {
	if(evt.added){
		// stagedComp.value.push(evt.added.element)
		console.log(evt.added.element)
	}
	console.log(stagedComp.value)


}

const delBlock = (index)=>{
	stagedComp.value.splice(index, 1)

}


</script>

<style  scoped>
div:hover > .action {
    opacity: 1 !important;
}
</style>