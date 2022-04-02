<template>
	<div class="w-48 h-full card flex flex-col items-start py-5 px-5 gap-2">
		<span
			class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n"
			@mouseover="test"
		>{{n}}</span>
	</div>
</template>

<script lang="ts" setup>
import { readBlocks } from '../../composables/useFileSystem'

const test = (el)=>{
	console.log(el.target)
	
}
const Block = readBlocks()

console.log(Block)


</script>

<style  scoped>

</style>