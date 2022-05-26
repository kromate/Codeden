<template>
	<div class="relative bg-white font-roboto">
		<div class="relative">
			<div class="flex flex-col bg-white xl:h-screen xl:overflow-hidden">
				<div class="flex overflow-hidden">
					<SideBar @change-component="changeComponent" />
					<MainView
						:component="component"
						:current-component="currentComponent"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import SideBar from '@/components/components/sidebar.vue'
import MainView from '@/components/components/MainView.vue'

import { onMounted, shallowRef, ref } from 'vue'
const currentComponent = ref('Alerts')
const component = shallowRef()

onMounted(async () => {
	const block = await import(
		`../../../components/${currentComponent.value}/index.vue`
	)
	component.value = block.default
})

const changeComponent = async (name) => {
	currentComponent.value = name
	const block = await import(
		`../../../components/${currentComponent.value}/index.vue`
	)
	component.value = block.default
}
</script>

<style scoped></style>
