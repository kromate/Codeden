export const readBlocks = async () => {

    const requireComponent = import.meta.glob('../../blocks/*/index.vue')

    console.log(requireComponent);


}