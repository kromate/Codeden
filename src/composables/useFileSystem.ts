export const readBlocks = async () => {

    let result = []

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')
    const BlockArr = Object.keys(requireComponent)

    for (let i = 0; i < BlockArr.length; i++) {
        BlockArr[i].split('/')[3]
    }

}