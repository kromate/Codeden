<template>
	<div>
		<component :is="modals[id]" v-for="id in stack" :key="id" :modal="id" />
	</div>
</template>

<script setup lang="ts">

import { modal } from '@'


const { stack, modals } = modal


</script>
