import { useStorage } from "@vueuse/core";
import { ref } from "vue";

export const elemObject = function (comp, pos, name) {
  let obj = {
    comp: comp,
    img: null,
    index: pos,
    compLoaded: false,
    imgLoaded: false,
    name: name,
  };
  return obj;
};

export const stagedComp = ref([]);
export const savedComp = useStorage("savedComp", []);

export const delBlock = (index) => {
  stagedComp.value.splice(index, 1);
  savedComp.value.splice(index, 1);
};

export const loadSavedComp = () => {
  console.log(savedComp.value);
  console.log(stagedComp.value);
  for (const elem of savedComp.value) {
    console.log(elem);
    const newArr = elem.split(" ");
    const elemArrPos = newArr.pop();
    newArr.pop();
    const elemName = newArr.join(" ");
    import(`../../../blocks/${elemName}/${elemArrPos}/index.vue`).then((d) => {
      stagedComp.value.push(new elemObject(d.default, elemArrPos, elem));
    });
  }
};

export const detectChnages = (evt) => {
  let newArr = [];
  for (const elem of stagedComp.value) {
    console.log(elem);
  }
};
