<template>
	<nav class="bg-primary p-4">
		<span class="md:px-5 text-xl font-black leading-none text-white"><span>CodeDen</span><span class="text-white">.</span></span>
	</nav>

	<div class="flex w-full p-4 gap-4">
		<div class="w-40 h-full rounded-md shadow-xl bg-white flex flex-col items-start py-5 px-5 gap-2">
			<span class="self-start inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full" v-for="n in 12" :key="n">Header</span>
		</div>

		<div class="w-full rounded-md shadow-xl">
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>

</style>