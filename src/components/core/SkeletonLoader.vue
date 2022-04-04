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
  background: linear-gradient(30deg, #6a3f05, #a2691e, #804b0a, #a56417);
  background-size: 400% 400%;
  -webkit-animation: Gradient-04a0d67a 2.25s ease infinite;
  animation: Gradient-04a0d67a 2s ease infinite;
}
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>