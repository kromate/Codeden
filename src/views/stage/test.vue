<template>
	<component :is=" c" class="hover:rounded-lg"/>
</template>

<script setup>

import { onMounted, ref } from 'vue'

const c = ref()
onMounted(async ()=>{
	const {default:b} =  await import('../../../blocks/Call To Actions/1/index.vue')
	c.value = b
})

</script>