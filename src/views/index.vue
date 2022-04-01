<template>
	<section class="w-full px-6 pb-12 antialiased bg-white">
		<div class="mx-auto container">
			<NavBar />
			<div
				class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center"
			>
				<h1
					class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"
				>
					<span class="inline md:block">Start Crafting Your</span>
					<span
						class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"
					>Next Great Idea</span
					>
				</h1>
				<div
					class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"
				>
					Simplifying the creation of landing pages, blog pages, application
					pages and so much more!
				</div>
				<div class="flex flex-col items-center mt-12 text-center">
					<span class="relative inline-flex w-full md:w-auto">
						<a
							href="#_"
							type="button"
							class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
						>
							Get Started
						</a>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
//@ts-ignore
import NavBar from '../components/NavBar.vue'
</script>
