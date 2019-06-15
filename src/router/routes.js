import tokenService from '@/common/tokenService'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Dashboard.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/',
    name: 'profile',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Profile.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/',
    name: 'book',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Book.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/',
    name: 'search',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Search.vue'),
    beforeEnter: checkAuth,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    beforeEnter: isLoggedIn
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Register.vue'),
    beforeEnter: isLoggedIn
  },
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "not-found" */
      /* webpackMode: "lazy" */
      `@/views/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "access-denied" */
      /* webpackMode: "lazy" */
      `@/views/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "server-error" */
      /* webpackMode: "lazy" */
      `@/views/Error.vue`
    )
  },
]

function checkAuth (to, from, next) {
  const role = tokenService.getRole()
  if(role) {
    next()
  } else {
    next('/login');
  }
}

function isLoggedIn (to, from, next) {
  const role = tokenService.getRole()
  if(role) {
    next('/')
  } else {
    next()
  }
}




export default routes