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

const FolderCompList = {
  'Navigations': import.meta.glob(`../../components/Navigations/**`),
  'Headers': import.meta.glob(`../../components/Headers/**`),
  'Footers': import.meta.glob(`../../components/Footers/**`),
  'Heros': import.meta.glob(`../../components/Heros/**`),
  'Alerts': import.meta.glob(`../../components/Alerts/**`),
  'Authentication': import.meta.glob(`../../components/Authentication/**`),
  'Breadcrumbs': import.meta.glob(`../../components/Breadcrumbs/**`),
  'Buttons': import.meta.glob(`../../components/Buttons/**`),
  'Cards': import.meta.glob(`../../components/Cards/**`),
  'CTA': import.meta.glob(`../../components/CTA/**`),
  'Dropdowns': import.meta.glob(`../../components/Dropdowns/**`),
  'FAQ': import.meta.glob(`../../components/FAQ/**`),
  'Features': import.meta.glob(`../../components/Features/**`),
  'Forms': import.meta.glob(`../../components/Forms/**`),
  'Pagination': import.meta.glob(`../../components/Pagination/**`),
  'Pricing': import.meta.glob(`../../components/Pricing/**`),
  'Sections': import.meta.glob(`../../components/Sections/**`),
  'Sidebars': import.meta.glob(`../../components/Sidebars/**`),
  'Tabs': import.meta.glob(`../../components/Tabs/**`),
  'Teams': import.meta.glob(`../../components/Teams/**`),
}

export const FolderComp = async (data: string) => {
  //@ts-ignore
  const requireComponent = FolderCompList[data];
  const BlockArr = Object.keys(requireComponent);
  let curr = "";
  const result: getBlockObject[] = [];
  for (let i = 0; i < BlockArr.length; i++) {
    const pos = BlockArr[i].split("/")[4];
    if (curr !== pos && pos !== "index.vue") {
      const obj = {
        comp: (await import(`../../components/${data}/${pos}/index.vue`))
          .default,
        img: (await import(`../../components/${data}/${pos}/image.jpeg`))
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


