<template>
	<div v-for="n in blockDate"  :key="n.index" class="w-full">
		<img :src="n.img" alt="Navigation one" class="rounded-md w-full shadow-xl object-cover"  @load="check(n)">
	
		<SkeletonLoader v-if="!n.imgLoaded" height="100px" width="100%" radius="6px"/>
	</div>

</template>

<script lang="jsx" setup>
//@ts-ignore
import {getBlockNavigations} from '@/composables/useFileSystem'
import { ref, onMounted } from 'vue'
import SkeletonLoader from '../../src/components/core/SkeletonLoader.vue'

const blockDate = ref()
onMounted(async()=>{
	blockDate.value = await getBlockNavigations()
})

const check = (n)=>{
	n.imgLoaded = true
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