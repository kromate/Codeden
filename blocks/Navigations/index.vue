<template>
	<img src="./1/image.png" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in 20" :key="n">
</template>

<script lang="ts" setup>
import {getBlockNavigations} from '@/composables/useFileSystem'

getBlockNavigations()
</script>

<style  scoped>

</style>