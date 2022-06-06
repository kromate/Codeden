<template>
	<div class="relative bg-white font-roboto">
		<div class="relative">
			<div class="flex flex-col bg-white xl:h-screen xl:overflow-hidden">
				<div class="flex overflow-hidden">
					<SideBar />
					<MainView />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import SideBar from "@/components/components/sidebar.vue";
import MainView from "@/components/components/MainView.vue";
</script>

<style scoped></style>
