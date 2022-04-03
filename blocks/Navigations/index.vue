<template>
	<img :src="n.comp" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in data" :key="n.index">
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockNavigations} from '@/composables/useFileSystem'

const data = getBlockNavigations()
console.log(await data)

</script>

<style  scoped>

</style>