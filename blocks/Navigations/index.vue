<template>
	<draggable v-model="list" group="people" @start="drag=true" @end="drag=false">
		<div v-for="(n, i) in list" :key="i">
			{{ n }}
		</div>
		<!-- <img src="./one/image.png" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in list" :key="n"> -->
	</draggable>
	
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
const drag = false
const list = [1,2,3,4,5,6,7,8,9,10]
</script>

<style  scoped>

</style>