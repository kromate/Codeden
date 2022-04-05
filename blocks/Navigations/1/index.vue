<template>

	<!-- Section 1 -->
	<section class="relative w-full px-8 text-gray-700 bg-white body-font">
		<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
			<a href="#_" class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">tails.</a>

			<nav class="top-0 left-0 z-0 flex items-center justify-center w-auto h-full py-5 -ml-0 space-x-5 text-base  md:absolute">
				<a href="#_" class="mr-5 relative font-medium leading-6 text-gray-600">
					<span class="block">Home</span>
				
				</a>
				<a href="#_" class="mr-5 relative font-medium leading-6 text-gray-600">
					<span class="block">Features</span>
				
				</a>
				<a href="#_" class="mr-5 relative font-medium leading-6 text-gray-600">
					<span class="block">Pricing</span>
				
				</a>
				<a href="#_" class="mr-5 relative font-medium leading-6 text-gray-600">
					<span class="block">Blog</span>
				
				</a>
			</nav>

			<div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
				<a href="#" class="mr-5 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
					Sign in
				</a>
				<span class="inline-flex rounded-md shadow-sm">
					<a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
						Sign up
					</a>
				</span>
			</div>
		</div>
	</section>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const hover = ref(false)
</script>

<style>
.bg{
	color:#2563eb
}
</style>