<template>
	<div>
		<div
			class="fixed inset-0 z-50 transition-opacity bg-black opacity-50 xl:hidden"
			:class="showComponentNav ? 'block' : 'hidden'"
			@click="showComponentNav = false"
		></div>
		<div
			class="fixed inset-y-0 left-0 z-50 flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto transition duration-200 transform bg-white border-gray-200 shadow-lg xl:translate-x-0 xl:static xl:inset-0"
			:class="
				showComponentNav
					? 'translate-x-0 ease-out'
					: '-translate-x-full ease-in'
			"
		>
			<router-link
				to="/"
				class="inline-flex items-center text-xl font-bold text-gray-700 transition-colors duration-200 transform md:text-2xl hover:text-blue-500"
			><img src="/logo.png" alt="logo" class="mr-2 w-7 h-7" />

				<span class="p-1 text-xl font-black leading-none text-primary"
				><span>CodeDen</span><span class="text-indigo-600">.</span></span
				>
			</router-link>

			<nav class="mt-6">
				<div
					class="flex items-center justify-between px-4 py-1.5 mt-1  rounded-md outline-none text-gray-500 hover:text-white hover:text-blue-500 hover:bg-primary"
					v-for="n in Block"
					:key="n.name"
					@click="changeComponent(n.name)"
				>
					<button
						class="transition-colors duration-200 ease-in-out focus:outline-none w-full font-semibold text-left"
					>
						{{ n.name }}
					</button>
					<!---->
				</div>
			</nav>
		</div>

		<button
			type="button"
			class="fixed z-50 flex items-center justify-center p-3 text-white bg-gray-900 rounded-full focus:outline-none xl:hidden bottom-24 right-8"
			@click="showNav"
		>
			<span class="sr-only">Open site navigation</span>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="w-8 h-8"
			>
				<path
					v-if="showComponentNav"
					d="M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
					fill="currentColor"
				></path>
				<path
					v-else
					d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
					fill="currentColor"
				></path>
			</svg>
		</button>
	</div>
</template>

<script lang="ts" setup>
import { FolderReader } from '../../composables/useFileSystem'
import { ref } from 'vue'

const emit = defineEmits(['changeComponent'])
const showComponentNav = ref(false)
const Block = FolderReader('components')

const showNav = () => {
	showComponentNav.value = !showComponentNav.value
}

const changeComponent = (name) => {
	emit('changeComponent', name)
	showComponentNav.value = false
}
</script>

<style scoped></style>
