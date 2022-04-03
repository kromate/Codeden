interface blockObject {
    comp: () => Promise<{ [key: string]: any }>
    name: string
}

export const readBlocks = () => {
    let result: blockObject[] = []

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')
    const BlockArr = Object.keys(requireComponent)

    for (let i = 0; i < BlockArr.length; i++) {
        let obj = {
            comp: requireComponent[BlockArr[i]],
            name: BlockArr[i].split('/')[3],
        }

        result.push(obj)
    }

    return result
}

export const getBlockContent = (folderName) => {
    const requireComponent = import.meta.glob(`../../blocks/${folderName}/**/*`)

    console.log(requireComponent)
}
