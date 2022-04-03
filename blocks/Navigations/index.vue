<template>
	<draggable>
		<img src="./one/image.png" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in 20" :key="n">
	</draggable>
	
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
</script>

<style  scoped>

</style>