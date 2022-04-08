<template>
	<DefaultLayout>
		<component :is="elem.comp"  v-for="elem in stagedComp" :key="elem.name"/>
	</DefaultLayout>
</template>

<script setup>
import {stagedComp, loadSavedComp} from '../../composables/useStage'
import { onMounted, ref } from 'vue'
import DefaultLayout from '../../layouts/defaultLayout.vue'
import { useRoute } from 'vue-router'
import { getSinglepageBlock } from '../../firebase/firestore'
// onMounted(loadSavedComp)

const result = ref(null)
const id = useRoute().params.id
console.log(id)
onMounted(async () => {
	result.value = await getSinglepageBlock(id)
	console.log(result.value)
})
</script>