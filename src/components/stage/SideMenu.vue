<template>
	<div class="w-48 h-full card flex flex-col items-start py-5 px-5 gap-2">
		<span
			class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n"
			@mouseover="test"
		>{{n}}</span>
	</div>
	<div class="w-48 h-full card flex flex-col items-start py-5 px-5 gap-2" v-if="currentBlock">
		{{currentBlock}}
		<span
			class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n"
			@mouseover="test"
		>{{n}}</span>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { readBlocks } from '../../composables/useFileSystem'


const currentBlock = ref('')
const test = (el)=>{
	currentBlock.value =	el.target.innerHTML
	
}
const Block = readBlocks()



</script>

<style  scoped>

</style>