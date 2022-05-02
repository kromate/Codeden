<template>
	<Modal modal="$atts.modal"
		title="Save This Page"
	>
		<div
			class="relative flex items-center max-w-lg mx-auto mt-12 overflow-hidden text-center rounded-md border-2 border-primary"
		>
			<input
				disabled
				type="text"
				name="search"
				placeholder="Search components"
				class="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none cursor-not-allowed"
			/>
			<span class="relative top-0 right-0 block">
				<button
					type="button"
					class="flex justify-center items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-700 focus:outline-none active:bg-indigo-700"
				>
					Save
				</button>
			</span>
		</div>
	</Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/core/modal/Modal.vue'


</script>

<style>

</style>