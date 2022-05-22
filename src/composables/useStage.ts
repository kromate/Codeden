import { useStorage } from "@vueuse/core";
import { ref } from "vue";

export const stageMeasurements = [
  {
    name: "xl",
    size: "1280px",
  },
  {
    name: "lg",
    size: "1024px",
  },
  {
    name: "md",
    size: "768px",
  },
  {
    name: "sm",
    size: "640px",
  },
  {
    name: "xs",
    size: "480px",
  },
];

export const elemObject = function (comp, pos, name) {
  const obj = {
    comp: comp,
    img: null,
    index: pos,
    compLoaded: false,
    imgLoaded: false,
    name: name,
  };
  return obj;
};

export const stagedComp = ref([]) as any;
export const savedComp = useStorage("savedComp", []);
export const stageWidth = ref(stageMeasurements[0]);

export const switchStageWidth = (val) => {
  stageWidth.value = val;
};

export const delBlock = (index) => {
  stagedComp.value.splice(index, 1);
  savedComp.value.splice(index, 1);
  detectChnages();
};

export const loadSavedComp = () => {
  for (let i = 0; i < savedComp.value.length; i++) {
    const parsedElem = JSON.parse(savedComp.value[i]);
    const newArr = parsedElem.name.split(" ");
    const elemArrPos = newArr.pop();
    newArr.pop();
    const elemName = newArr.join(" ");
    import(`../../blocks/${elemName}/${elemArrPos}/index.vue`).then((d) => {
      //@ts-ignore
      stagedComp.value[parsedElem.index] = new elemObject(
        d.default,
        elemArrPos,
        parsedElem.name
      );
    });
  }
};
export const loadOnlinePageBlocks = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const parsedElem = JSON.parse(arr[i]);
    const newArr = parsedElem.name.split(" ");
    const elemArrPos = newArr.pop();
    newArr.pop();
    const elemName = newArr.join(" ");
    import(`../../blocks/${elemName}/${elemArrPos}/index.vue`).then((d) => {
      //@ts-ignore
      stagedComp.value[parsedElem.index] = new elemObject(
        d.default,
        elemArrPos,
        parsedElem.name
      );
    });
  }
};

export const detectChnages = () => {
  const newArr = [] as any;

  for (let i = 0; i < stagedComp.value.length; i++) {
    const stringedElem = JSON.stringify({
      index: i,
      name: stagedComp.value[i].name,
    });
    newArr.push(stringedElem);
  }
  savedComp.value = newArr;
};
