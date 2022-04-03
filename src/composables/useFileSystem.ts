interface blockObject {
  comp: () => Promise<{ [key: string]: any }>;
  name: string;
}

export const readBlocks = () => {
  let result: blockObject[] = [];
  //@ts-ignore
  const requireComponent = import.meta.glob("../../blocks/*/index.vue");
  const BlockArr = Object.keys(requireComponent);

  for (let i = 0; i < BlockArr.length; i++) {
    let obj = {
      comp: requireComponent[BlockArr[i]],
      name: BlockArr[i].split("/")[3],
    };

    result.push(obj);
  }

  return result;
};

export const getBlockNavigations = (folderName) => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Navigations/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let   result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    if (curr !== BlockArr[i].split("/")[4]) {
      let obj = {
        comp: requireComponent[BlockArr[i]],
        index: BlockArr[i].split("/")[4],
        name: `${BlockArr[i].split("/")[3]}  ${BlockArr[i].split("/")[4]}`,
      };
      curr = BlockArr[i].split("/")[4];
    }
    result.push(obj);

    BlockArr[i].split("/")[3];
  }
  // if(keeper.has() )
  // console.log(requireComponent)
};
