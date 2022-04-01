export const readBlocks = async () => {

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')

    Object.keys(requireComponent)


}