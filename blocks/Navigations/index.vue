<template>
	<div v-for="n in blockDate"  :key="n.index" class="w-full">
		<img :src="n.img" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover"  @load="check(n.imgLoaded)">

	</div>

</template>

<script lang="ts" setup>
//@ts-ignore
import {getBlockNavigations} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'
import SkeletonLoader from '../../src/components/core/SkeletonLoader.vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockNavigations()
})

const check = (val)=>{
	console.log(val)
}

</script>

<style  scoped>

</style>


    <!-- imgLoad() {
      var image = document.querySelector("img");
      console.log(image.complete);
      if (image.complete && image.naturalHeight >= 0) {
        this.loaded = true;
        clearInterval(this.inter);
      }
    }, 
	
	    show() {
      this.inter = setInterval(() => {
        this.imgLoad();
      }, 1000);
    },
	-->