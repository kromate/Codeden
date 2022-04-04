<template>
	<nav class="bg-primary p-4 z-50 fixed top-0 inset-x-0 mb-48">
		<span class=" text-xl font-black leading-none text-white flex items-center ">
			//  <img src="@/assets/images/logoWhite.png" alt="logo" class="w-12 mr-3">
			<span>CodeDen</span><span class="text-white">.</span></span>
	</nav>

	<div class="flex w-full p-4 gap-4 min-h-[85vh] h-auto mt-20">
	
		<SideMenu/>
		<MainView />

	
	</div>
</template>

<script lang="ts" setup>
import SideMenu from '@/components/stage/SideMenu.vue'
import MainView from '@/components/stage/MainView.vue'


</script>

<style  scoped>

</style>


