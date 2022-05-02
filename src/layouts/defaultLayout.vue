<template>
	<PageLoading />
	<Alert />
	<slot />
	<ModalBase />
</template>

<script lang="ts" setup>
import PageLoading from '@/components/core/PageLoading.vue'
import Alert from '@/components/core/Alert.vue'
import ModalBase from '../components/core/modal/ModalBase.vue'
</script>

<style scoped></style>
