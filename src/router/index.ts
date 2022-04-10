// import { createRouter, createWebHistory } from 'vue-router';
// import type { RouteRecordRaw } from 'vue-router';

// export const routes: RouteRecordRaw[] = [
//     {
//         path: '/',
//         component: () => import('../views/index.vue'),
//     },
//     {
//         path: '/stage',
//         component: () => import('../views/stage/index.vue'),
//     },
// ]

// export const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })

import { routes } from "@/router/routes";
import { createRouter, createWebHistory } from "vue-router";

export const setupRouter = async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: await Promise.all(routes),
  });

  router.afterEach(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return router;
};

export const router = setupRouter();
