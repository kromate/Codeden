import { ref } from 'vue';

export const stagedComp = ref([]);

export const delBlock = (index) => {
  stagedComp.value.splice(index, 1);
};

export class elemObject {
  constructor(comp, pos, name) {
    this.comp = comp;
    this.pos = pos;
  }
}
// export const elemObject = function (comp, pos, name) {
//   let obj = {
//     comp: comp,
//     img: null,
//     index: pos,
//     compLoaded: false,
//     imgLoaded: false,
//     name: name,
//   };
//   //   return obj;
// };
