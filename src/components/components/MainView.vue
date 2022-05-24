<template>
	<main
		id="main"
		class="flex flex-col flex-1 overflow-x-hidden lg:overflow-y-auto"
	>
		<div class="container px-4 mx-auto sm:px-6">
			<Header />
			<section>
				<h1 class="mb-6 text-2xl font-semibold text-gray-800 capitalize">
					{{ currentComponent }}
				</h1>
				<component :is="component" />
			</section>
			<Footer />
		</div>
	</main>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
defineProps(["component", "currentComponent"]);
</script>

<style scoped></style>
