<template>
	<default-layout>
		<div class="flex flex-col w-full min-h-screen justify-start items-center mx-auto py-10">
			<div class="md:px-10 px-6 w-auto">
				<div class="mb-14 w-full text-center mt-4">
					<h1 class="text-3xl font-semibold text mb-2">My pageBlocks</h1>
					<p class="text">This contains a list of all your pageBlocks</p>
				</div>

				<transition-group
					v-if="result.length"
					appear
					class="gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
					@before-enter="beforeEnter"
					@enter="enter"
				>
					<article
						v-for="(n, index) in result"
						:key="n.id"
						:data-index="index"
						class="overflow-hidden rounded-md shadow-xl p-4 border border-slate-700 dark:border-slate-200 text w-[22rem] max-w-[100%]"
					>
						<router-link class="text-xl underline mb-2" :to="`/pageBlock/${n.id}`"> <p class="font-bold">Created on</p> {{ n.date }}</router-link>


						<div class="flex gap-4 mt-4">
				
							<span
								class="dark:bg-white bg-black dark:text-black text-white px-3 cursor-pointer rounded-md"
								@click="sharepageBlock(n)"
							>Share</span
							>
							<span
								class="dark:bg-white bg-black dark:text-black text-white px-3 cursor-pointer rounded-md"
								@click="delpageBlock(n.id)"
							>Delete</span
							>
						</div>
					</article>
				</transition-group>

				<div v-else class="flex flex-col justify-center items-center">
					<lottie-player
						src="https://assets2.lottiefiles.com/packages/lf20_heejrebm.json"
						background="transparent"
						speed="1"
						style="width: 300px; height: 300px"
						loop
						autoplay
					></lottie-player>
					<h3 class="text text-center">
						You currently do not have any pageBlock, fix up 👍
					</h3>
					<router-link
						to="/stage"
						class="btn max-w-[75%] mt-4 justify-center items-center flex"
					>Create pageBlock</router-link
					>
				</div>
			</div>
		</div>
	</default-layout>

</template>

<script>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import { useShare, useClipboard } from '@vueuse/core'
import { useUser } from '@/composables/useGlobals'
import { useAlert } from '@/composables/useNotification'
import { getUserpageBlock, delpageBlock } from '@/firebase/firestore'
import DefaultLayout from '../../layouts/defaultLayout.vue'

export default {
	name: 'SetupPage',
	middleware: [
		({ redirect }) => {
			if (!useUser().UserRef) {
				redirect('/')
				useAlert().openAlert('You need to sign in to View pageBlocks dhur🙄')
			}
		},
	],
	setup() {
		const result = ref([])
		const source = ref('')
		const { copy } = useClipboard({ source })
		const { share, isSupported } = useShare()
		onMounted(async () => {
			result.value = await getUserpageBlock()
		})
		const copyLink = () => {
			copy()
			useAlert().openAlert('Seems something went wrong while trying to share, don\'t worry we copied it to your clipboard ')
		}
		const sharepageBlock = (pageBlock) => {
			source.value = `${location.href}/${pageBlock.id}`
			if (!isSupported) {
				copyLink()
			}
			try {
				share({
					title: pageBlock.value.title,
					text: pageBlock.value.desc,
					url: source.value,
				})
			}
			catch {
				copyLink()
			}
		}
		const beforeEnter = (el) => {
			el.style.opacity = 0
			el.style.transform = 'translateY(100px)'
		}
		const enter = (el, done) => {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 0.5,
				onComplete: done,
				delay: el.dataset.index * 0.1,
			})
		}
		return {
			beforeEnter,
			enter,
			result,
			delpageBlock,
			sharepageBlock,
		}
	},
	components: { DefaultLayout }
}
</script>
