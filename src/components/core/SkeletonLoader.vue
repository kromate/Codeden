<template>
	<div
		class="pulsate"
		:style="{ width: width, height: height, 'border-radius': radius }"
	></div>
</template>

<script lang="ts" setup>
defineProps({
	width: {
		default : '120px',
		type:String
	},
	height: {
		default : '120px',
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
  background: linear-gradient(90deg, #baa891, #a9a9a9, #4948484f, #16130e);
  background-size: 400% 400%;
  -webkit-animation: Gradient 2.25s ease infinite;
  animation: Gradient 2s ease infinite;
}
@keyframes Gradient {
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 50%;
  }
  100% {
    background-position: 100%;
  }
}
</style>