<template>
	<Modal modal="$atts.modal">
		<div class="h-60 bg-white max-w-[79%]  py-9 px-12 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg ">
			<div class="flex w-full justify-between">
				<div class="flex items-center">
					<div class="btn-outline-2 mr-6 cursor-pointer" @click="close()">
						<a class="las la-times" style="font-size: 1.5rem;" @click.prevent="closeModal" />
					</div>
					<span class="font-semibold text-xl">
						Accounts
					</span>
				</div>
			
			</div>

		
		</div>
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