<template>
	<Modal modal="$atts.modal">

	</Modal>
</template>

<script>
import Modal from '@/components/core/modal/Modal.vue'

export default {
	name: 'Accounts',
	components: { Modal },
	props:{
		close:{
			type: Function,
			required: true,
			default: ()=>{}
		}
	},
	setup() {
		return {

		}
	}
}
</script>

<style>

</style>