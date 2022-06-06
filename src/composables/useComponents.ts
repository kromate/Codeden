import { ref, shallowRef } from "vue";

export const currentComponent = ref("Alerts");
export const component = shallowRef();

export const changeComponent = async (name) => {
  currentComponent.value = name;
  const block = await import(
    `../../../components/${currentComponent.value}/index.vue`
  );
  component.value = block.default;
};
