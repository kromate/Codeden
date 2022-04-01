export const readBlocks = async () => {

    let result: string[] = []

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')
    const BlockArr = Object.keys(requireComponent)

    for (let i = 0; i < BlockArr.length; i++) {
        result.push(BlockArr[i].split('/')[3])
    }

}