import { ref } from 'vue';

export const stagedComp = ref([]);

export const delBlock = (index) => {
  stagedComp.value.splice(index, 1);
};

export const serialize = (key, value) => {
  if (typeof value === "function") {
    return value.toString();
  }
  return value;
};

export const deserialize = (key, value) => {
  if (value && typeof value === "string" && value.substr(0, 8) == "function") {
    var startBody = value.indexOf("{") + 1;
    var endBody = value.lastIndexOf("}");
    var startArgs = value.indexOf("(") + 1;
    var endArgs = value.indexOf(")");

    return new Function(
      value.substring(startArgs, endArgs),
      value.substring(startBody, endBody)
    );
  }
  return value;
};
