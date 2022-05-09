import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/tailwind.css";
import { router as setupRouter } from "@/router";
import { registerComponents } from './plugins/components/index'

const init = async () => {
  const router = await setupRouter;
  const app = createApp(App);
  await registerComponents(app)
  // await router.isReady()

  app.use(router).mount("#app");
};

init().then();
