import tokenServices from '@/common/tokenService'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Dashboard.vue')
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

// function checkAuth (to, from, next) {
//   const role = tokenServices.getRole()
//  next()
// }

function isLoggedIn (to, from, next) {
  const role = tokenServices.getRole()
  if(role !== null && role !== 'false') {
    next('/')
  } else {
    next()
  }
}




export default routes