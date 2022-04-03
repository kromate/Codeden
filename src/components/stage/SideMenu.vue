<template>
	<div class="w-48 h-full card flex flex-col items-start py-5 px-5 gap-2 z-30 ">
		<span
			class="self-start text-sm inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full"
			v-for="n in Block" :key="n.name"
			@mouseover="test(n.name, n.comp)"
			
		>{{n.name}}</span>
	</div>
	<transition appear name="slideIn">
		<div class="bg-bgDark  fixed left-0 top-0 w-[300px]  h-full" v-if="currentBlockName" @mouseleave="close">
			<div class="w-[30rem] h-full card !bg-transparent  shadow-xl flex flex-col items-start py-5 px-5 gap-2 absolute left-56 " >
				{{currentBlockName}}
				
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
	const show = await comp()
	currentBlockName.value = ''
	currentBlockName.value = name
	currentBlockComp.value = show.default
}
const close = ( )=>{
	currentBlockName.value =''
}
const Block = readBlocks()



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