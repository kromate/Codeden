interface readBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  name: string;
}
export interface getBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  img: string;
  index: string;
  compLoaded: boolean;
  imgLoaded: boolean;
  name: string;
}

export const readBlocks = () => {
  let result: readBlockObject[] = [];
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

export const getBlockNavigations = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Navigations/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Navigations/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Navigations/${pos}/image.jpeg`))
          .default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockHeaders = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Headers/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Headers/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Headers/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockHeros = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Heros/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Heros/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Heros/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockPricings = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Pricing/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Pricing/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Pricing/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockTestimonials = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Testimonials/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Testimonials/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Testimonials/${pos}/image.jpeg`))
          .default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockTeams = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Teams/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Teams/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Teams/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockLogos = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Logos/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Logos/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Logos/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockIntergrations = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Intergrations/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Intergrations/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Intergrations/${pos}/image.jpeg`))
          .default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockForms = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Forms/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Forms/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Forms/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockFooters = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Footers/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Footers/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Footers/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockFeatures = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Features/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Features/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Features/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockFAQs = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/FAQs/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/FAQs/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/FAQs/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockContent = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Content/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Content/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Content/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockCallToActions = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Call To Actions/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Call To Actions/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/Call To Actions/${pos}/image.jpeg`))
          .default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
export const getBlockBlog = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../blocks/Blog/**`);
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  let result = [];
  for (let i = 0; i < BlockArr.length; i++) {
    let pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      let obj = {
        comp: (await import(`../../blocks/Blog/${pos}/index.vue`)).default,
        img: (await import(`../../blocks/Blog/${pos}/image.jpeg`)).default,
        index: pos,
        compLoaded: false,
        imgLoaded: false,
        name: `${BlockArr[i].split("/")[3]}  ${pos}`,
      };
      result.push(obj);
      curr = pos;
    }
  }

  return result;
};
