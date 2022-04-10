export const registerComponents = async (app) => {
  const requireComponent = import.meta.glob("../../components/*.vue");

  for (const path in requireComponent) {
    requireComponent[path]().then(async (mod) => {
      const componentName = path
        ?.split("/")
        ?.pop()
        ?.replace(/\.\w+$/, "");
      await app.component(componentName, mod.default || mod);
    });
  }
};
