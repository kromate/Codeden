interface readBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  name: string;
}
export interface getBlockObject {
  comp: () => Promise<{ [key: string]: any }>;
  img?: string;
  index?: string;
  compLoaded?: boolean;
  imgLoaded?: boolean;
  name: string;
}

export const readBlocks = () => {
  const result: readBlockObject[] = [];
  //@ts-ignore
  const requireComponent = import.meta.glob("../../blocks/*/index.vue");
  const BlockArr = Object.keys(requireComponent);

  for (let i = 0; i < BlockArr.length; i++) {
    const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
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

//component blocks
export const readComp = () => {
  const result: readBlockObject[] = [];
  //@ts-ignore
  const requireComponent = import.meta.glob("../../components/*/index.vue");
  const BlockArr = Object.keys(requireComponent);

  for (let i = 0; i < BlockArr.length; i++) {
    const obj = {
      comp: requireComponent[BlockArr[i]],
      name: BlockArr[i].split("/")[3],
    };

    result.push(obj);
  }
  return result;
};

export const getNavigationComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Navigations/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Navigations/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getFooterComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Footers/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Footers/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getHeroComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Heros/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Heros/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getAlertComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Alerts/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Alerts/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getAuthComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(
    `../../components/Authentication/**`
  );
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Authentication/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getBreadcrumbComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Breadcrumbs/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Breadcrumbs/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getButtonComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Buttons/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Buttons/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getCardComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Cards/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Cards/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getCTAComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/CTA/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/CTA/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getDropdownComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Dropdowns/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Dropdowns/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getFAQComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/FAQ/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/FAQ/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getFeatureComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Features/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Features/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getFormComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Forms/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Forms/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getPaginationComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Pagination/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Pagination/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getPricingComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Pricing/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Pricing/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getSectionComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Sections/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Sections/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getSidebarComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Sidebars/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Sidebars/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getTabComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Tabs/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Tabs/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};

export const getTeamComp = async () => {
  //@ts-ignore
  const requireComponent = import.meta.glob(`../../components/Teams/**`);
  const BlockArr = Object.keys(requireComponent);
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/Teams/${pos}`)).default,
        name: `${BlockArr[i].split("/")[3]} ${pos.split(".")[0]}`,
      };
      result.push(obj);
    }
  }
  return result;
};
