<template>
	<div
		class="pulsate"
		:style="{ width: width, height: height, 'border-radius': radius }"
	></div>
</template>

<script lang="ts" setup>
defineProps({
	width: {
		default : '100%',
		type:String
	},
	height: {
		default : '100%',
		type:String
	},
	radius: {
		default : '0px',
		type:String
	},
})
</script>

<style  scoped>
.pulsate {
  max-width: 90vw !important;
  background: linear-gradient(90deg, #baa891, #a9a9a9, #4948484f, #928fd8);
  background-size: 400% 400%;
  -webkit-animation: Gradient 2.25s ease infinite;
  animation: Gradient 2s ease infinite;
}
 @keyframes Gradient {
    0% {
        background-position: -468px 0;
    }
     100% {
        background-position: 468px 0;
    }
}
</style>