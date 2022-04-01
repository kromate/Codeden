<template>
	<nav class="bg-primary p-4">
		<span class="md:px-5 text-xl font-black leading-none text-white"><span>CodeDen</span><span class="text-white">.</span></span>
	</nav>

	<div class="flex w-full p-4 gap-4 h-screen">
	
		<SideMenu/>
		<MainView/>

	
	</div>
</template>

<script lang="ts" setup>
import SideMenu from '../../components/stage/SideMenu.vue'
import MainView from '../../components/stage/MainView.vue'

</script>

<style  scoped>

</style>