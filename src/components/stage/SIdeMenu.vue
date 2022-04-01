<template>
	<div class="w-40 h-full card flex flex-col items-start py-5 px-5 gap-2">
		<span class="self-start inline-block text-slate-500 px-2 py-1  rounded-md cursor-pointer font-bold hover:bg-slate-200 w-full" v-for="n in 12" :key="n">Header</span>
	</div>
</template>

<script lang="ts" setup>
import { readBlocks } from '../../composables/useFileSystem'

readBlocks()

</script>

<style  scoped>

</style>