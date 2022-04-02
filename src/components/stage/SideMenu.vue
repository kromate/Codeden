<template>
	<div class="w-48 h-full card flex flex-col items-start py-5 px-5 gap-2">
		<span
			class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n"
			@mouseover="test"
			
		>{{n}}</span>
	</div>
	<transition appear name="toast">
		<div class="w-[25rem] h-full card flex flex-col items-start py-5 px-5 gap-2 absolute left-48" v-if="currentBlock" @mouseleave="close">
			{{currentBlock}}
			<span
				class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
		
			></span>
		</div>
	</transition>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { readBlocks } from '../../composables/useFileSystem'


const currentBlock = ref('')
const test = (el)=>{
	currentBlock.value =	el.target.innerHTML
}
const close = (el)=>{
	console.log(el.target.className)
	currentBlock.value =''
}
const Block = readBlocks()



</script>

<style  scoped>


.toast-enter-active {
    animation: wobble 0.5s ease;
  }


  .toast-leave-active {
    transition: all 0.3s ease;
  }
  @keyframes wobble {
    0% { transform: translateX(-100px); opacity: 0 }
    100% { transform: translateX(0px); opacity: 1 }

  }
</style>