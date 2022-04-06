import { ref } from 'vue';

export const stagedComp = ref([]);

export const delBlock = (index) => {
  stagedComp.value.splice(index, 1);
};
