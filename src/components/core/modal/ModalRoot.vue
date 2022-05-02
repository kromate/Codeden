<template>
	<div :class="backgroundClass" class="sd-modal-background">
		<div v-if="closeOnBackground" class="sd-modal-under" @click="close" />
		<div :class="modalClass" class="sd-modal-inner">
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Modal',
	props: {
		close: {
			type: Function,
			required: true
		},
		closeOnBackground: {
			type: Boolean,
			required: false,
			default: false
		},
		backgroundClass: {
			type: String,
			required: false,
			default: ''
		},
		modalClass: {
			type: String,
			required: false,
			default: ''
		}
	},

})
</script>

<style  scoped>
	.sd-modal-background {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		z-index: 100;
		overflow: scroll;
    }
		.sd-modal-under {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}

</style>
