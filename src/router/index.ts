import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

import { getState } from 'src/app_state/app_state';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });


  Router.beforeEach((to, from, next) => {
    const {
      isUserLoggedIn,
      user
    } = getState();

    // Проверяем, аутентифицирован ли пользователь
    if (
      !isUserLoggedIn
      && to.path !== '/auth'
      && to.path !== '/auth/sign-in'
      && to.path !== '/auth/sign-up'
      && to.path !== '/auth/sign-up/school'
      && to.path !== '/auth/sign-up/company'
      && to.path !== '/auth/sign-up/tutor'
    ) {
      next({ path: '/auth/sign-in' });

    } else if (
      isUserLoggedIn
      && (
        to.path === '/'
        ||to.path === '/auth'
        || to.path === '/auth/sign-in'
        || to.path === '/auth/sign-up'
        || to.path === '/auth/sign-up/school'
        || to.path === '/auth/sign-up/company'
        || to.path === '/auth/sign-up/tutor'
      )
    ) {
      const userType = user?.user_type;
      if (userType === 'school') {
        next({ path: '/school' });
      } else if (userType === 'company' || userType === 'tutor') {
        next({ path: '/company' });
      }
    } 
  });

  return Router;
});
