<template>
	<Modal modal="$atts.modal">
		<div class="h-screen bg-white max-w-[79%]  w-[190rem] right-0 fixed py-9 px-12 ">
			<div class="flex w-full justify-between">
				<div class="flex items-center">
					<div class="btn-outline-2 mr-6 cursor-pointer" @click="close()">
						<Icon
							name="downArrow"
							size="s"
							class="rotate-90"
						/>
						close
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