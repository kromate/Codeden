<template>
	<component :is="elem.comp" class="hover:rounded-lg" v-for="elem in stagedComp" :key="elem.name"/>
</template>

<script setup>
import {stagedComp, loadSavedComp} from '../../composables/useStage'
import { onMounted } from 'vue'
onMounted(loadSavedComp)
console.log(stagedComp.value)


</script>