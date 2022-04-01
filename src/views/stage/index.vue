<template>
	<nav class="bg-primary p-4">
		<span class="md:px-5 text-xl font-black leading-none text-white"><span>CodeDen</span><span class="text-white">.</span></span>
	</nav>

	<div class="flex w-full p-4">
		<div class="w-40 h-96 rounded-md shadow-xl bg-white flex flex-col items-start py-3 px-5">
			<span class="text-base font-bold text-gray-500 py-1" v-for="n in 12" :key="n">Header</span>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>

</style>