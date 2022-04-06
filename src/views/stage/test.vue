<template>
	<component :is="stagedComp.value" class="hover:rounded-lg"/>
</template>

<script setup>
import {stagedComp} from '../../composables/useStage'


</script>