<template>
	<img :src="n.img" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in blockDate" :key="n.index">
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockNavigations} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockNavigations()

} )

</script>

<style  scoped>

</style>