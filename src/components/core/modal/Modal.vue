<template>

	<transition name="slide" appear :duration="500">
		<div 	:close="closeModal"
			:close-on-background="closeOnBackground"
			background-class="modal-background"
			modal-class="modal-inner" class="bg transition-all">
			<transition  appear @before-enter="beforeEnter" @leave="onLeave"
				@enter="enter"
			>
				<slot/>
			</transition>
		</div>
	</transition>
</template>

<script lang="ts" >
import gsap from 'gsap'

export default {
	name: 'Modal',
	props: {
		modal: {
			type: String,
			required: true
		},
		close: {
			type: Function,
			required: false,
			default: () => {
			}
		},
		hideSeparator: {
			type: Boolean,
			required: false,
			default: false
		},
		closeOnBackground: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	setup (props) {
		const timeline = gsap.timeline({defaults:{duration:0.5}})
		const beforeEnter = (el) => {
			  el.style.opacity = 0
			el.style.transform = 'scale(0.5)'
		}
		const enter = (el, done) => {
			timeline.to(el, {
				opacity: 1,
				y: 0,
				scale:1,
				duration: 0.35,
				onComplete: done,
			},)
		}
		const onLeave=(el, done)=> {
			console.log(el)
			
			gsap.to(el, {
				opacity: 0,
				y: 0,
				scale:0.1,
				duration: 0.35,
				onComplete: done,
			},)
		}
	}
}
</script>




<style scoped>

.bg {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.40);
  width: 100vw;
  max-width: 100vw;
  min-height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: scale(0);
  opacity: 0
}


</style>