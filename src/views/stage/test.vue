<template>
	<component :is="elem.comp" class="hover:rounded-lg" v-for="elem in stagedComp" :key="elem.name"/>
</template>

<script setup>
import {stagedComp} from '../../composables/useStage'

console.log(stagedComp.value)


</script>