export const readBlocks = async () => {

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')
    const BlockArr = Object.keys(requireComponent)

    console.log(BlockArr)

}