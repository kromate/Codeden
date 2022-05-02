<template>

	<transition name="slide" appear :duration="500">
		<div 	:close="closeModal"
			class="bg transition-all" @click.prevent="closeModal">
			<div class="d-flex justify-content-end z-40">
				<a class="las la-times" style="font-size: 1.5rem;" @click.prevent="closeModal" />
			</div>
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
import { modal } from '@/composables/core/modals'

export default {
	name: 'Modal',
	props: {
		modal: {
			type: String,
			required: true
		},

	
	},
	setup (props) {
		const closeModal = () => {
			modal.close(props.modal)
		}
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

		return{onLeave, enter, beforeEnter, closeModal}
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