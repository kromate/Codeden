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

const FolderReaderList = {
  'blocks': import.meta.glob("../../blocks/*/index.vue"),
  'components': import.meta.glob("../../components/*/index.vue")
}

export const FolderReader = (data: string) => {
  const result: readBlockObject[] = [];
  //@ts-ignore
  const requireComponent = FolderReaderList[data]
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

const FolderBlockList = {
  'Navigations': import.meta.glob(`../../blocks/Navigations/**`),
  'Headers': import.meta.glob(`../../blocks/Headers/**`),
  'Heros': import.meta.glob(`../../blocks/Heros/**`),
  'Pricing': import.meta.glob(`../../blocks/Pricing/**`),
  'Testimonials': import.meta.glob(`../../blocks/Testimonials/**`),
  'Teams': import.meta.glob(`../../blocks/Teams/**`),
  'Logos': import.meta.glob(`../../blocks/Logos/**`),
  'Intergrations': import.meta.glob(`../../blocks/Intergrations/**`),
  'Forms': import.meta.glob(`../../blocks/Forms/**`),
  'Footers': import.meta.glob(`../../blocks/Footers/**`),
  'Features': import.meta.glob(`../../blocks/Features/**`),
  'FAQs': import.meta.glob(`../../blocks/FAQs/**`),
  'Content': import.meta.glob(`../../blocks/Content/**`),
  'Call To Actions': import.meta.glob(`../../blocks/Call To Actions/**`),
  'Blog': import.meta.glob(`../../blocks/Blog/**`),
}

export const FolderBlock = async (data: string) => {
  //@ts-ignore
  const requireComponent = FolderBlockList[data];
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../blocks/${data}/${pos}/index.vue`))
          .default,
        img: (await import(`../../blocks/${data}/${pos}/image.jpeg`))
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


//component blocks

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
