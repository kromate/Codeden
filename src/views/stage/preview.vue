<template>
	<DefaultLayout>
		<component :is="elem.comp"  v-for="elem in stagedComp" :key="elem.name"/>
	</DefaultLayout>
</template>

<script setup>
import {stagedComp, loadSavedComp} from '../../composables/useStage'
import { onMounted } from 'vue'
import DefaultLayout from '../../layouts/defaultLayout.vue'
onMounted(loadSavedComp)
console.log(stagedComp.value)


</script>