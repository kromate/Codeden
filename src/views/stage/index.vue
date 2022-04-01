<template>
	<nav class="bg-primary p-4">
		<span class="md:px-5 text-xl font-black leading-none text-white"><span>CodeDen</span><span class="text-white">.</span></span>
	</nav>

	<div class="flex w-full p-4">
		<div class="w-40 h-full rounded-md shadow-xl bg-white flex flex-col items-start py-3 px-5">
			<span class="self-start inline-block px-2 py-1 mb-2 rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full" v-for="n in 12" :key="n">Header</span>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>

</style>