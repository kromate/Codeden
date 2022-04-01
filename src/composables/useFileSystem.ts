export const readBlocks = async () => {

    const requireComponent = import.meta.glob('../../blocks/*/*')

    console.log(requireComponent);


}