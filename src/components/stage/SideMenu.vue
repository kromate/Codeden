<template>
	<div class="w-auto h-fit rounded-xl fixed card flex flex-col items-start py-5 px-5 gap-2 z-10 ">
		<span
			class="self-start text-sm leading-6 inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n.name"
			@mouseover="test(n.name, n.comp)"
			
		>{{n.name}}</span>
	</div>
	<transition appear name="slideIn">
		<div class="bg-bgDark  fixed left-0 top-0 w-[42rem] z-0  h-full" v-if="currentBlockName" @mouseleave="close">
			<div class="w-[30rem] h-full card !bg-transparent  shadow-none flex flex-col items-start py-5 px-5 gap-4 absolute left-[13rem] top-[75px] overflow-y-auto" >
				<!-- {{currentBlockName}} -->
				
				<component :is="currentBlockComp"/>
			</div>
		</div>
	
	</transition>

</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { readBlocks } from '../../composables/useFileSystem'


const currentBlockName = ref('')
const currentBlockComp = shallowRef('')

const test = async(name, comp)=>{

	currentBlockName.value = ''
	currentBlockName.value = name
	currentBlockComp.value = comp
}
const close = ( )=>{
//	currentBlockName.value =''
}
const Block = readBlocks()

console.log(await Block)



</script>

<style  scoped>


.slideIn-enter-active {
    animation: slideIn .5s ease;
  }

  .slideIn-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .slideIn-leave-active {
    transition: all 0.3s ease;
  }
  @keyframes slideIn {
    0% { transform: translateX(-100px); opacity: 0 }
    100% { transform: translateX(0px); opacity: 1 }

  }
</style>