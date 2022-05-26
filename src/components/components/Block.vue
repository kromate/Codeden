<template>
	<div :name="componentName">
		<div class="mb-16">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="flex items-center">
					<h3 class="text-gray-700 capitalize md:text-lg">
						{{ componentName }}
					</h3>
				</div>
				<div class="flex items-center mt-4 space-x-4 md:mt-0">
					<button
						aria-label="Rtl"
						class="transition-colors duration-200 ease-in-out focus:outline-none p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none bg-gray-200 text-gray-600"
					>
						<svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 fill-current">
							<path
								d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z"
								fill="currentColor"
							></path>
							<path
								d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z"
								fill="currentColor"
							></path>
						</svg>
					</button>
					<button
						aria-label="dark mode button"
						class="transition-colors duration-200 ease-in-out focus:outline-none p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none"
					>
						<!---->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							></path>
						</svg>
					</button>
					<button
						aria-label="View code snippet"
						class="transition-colors duration-200 ease-in-out focus:outline-none p-1 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none bg-gray-200 text-gray-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
							></path>
						</svg>
					</button>
					<button
						aria-label="Copy"
						class="transition-colors duration-200 ease-in-out focus:outline-none p-1 text-gray-600 bg-gray-200 rounded-md hover:text-gray-700 hover:bg-gray-400 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
							></path>
						</svg>
					</button>
				</div>
			</div>
			<div class="">
				<div
					class="flex items-center justify-center mt-4 overflow-hidden bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900"
				>
					<div dir="ltr" class="relative w-full">
						<div class="px-3 py-6">
							<slot />
						</div>
						<!---->
					</div>
				</div>
			</div>
			<!---->
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	componentName: String,
})
</script>
