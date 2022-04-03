<template>
	<img :src="n.comp" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover" v-for="n in blockDate" :key="n.index">
</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockNavigations} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'

let blockDate = ref({})
onMounted(async()=>{
	blockDate = await getBlockNavigations()
} )

</script>

<style  scoped>

</style>