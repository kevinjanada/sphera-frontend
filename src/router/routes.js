import tokenService from '@/common/tokenService'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Dashboard.vue'),
    // beforeEnter: checkAuth,
    meta: {
      breadcrumbs: [
        { title: 'Dashboard'}
      ]
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Profile.vue'),
    // beforeEnter: checkAuth,
    meta: {
      breadcrumbs: [
        { title: 'Profile' }
      ]
    }
  },
  {
    path: '/book',
    name: 'book',
    component: () => import(/* webpackChunkName: "login" */ '@/views/BookVenue.vue'),
    // beforeEnter: checkAuth,
    meta: {
      breadcrumbs: [
        { title: 'Book Venue' }
      ]
    }
  },
  {
    path: '/venue-details',
    name: 'venue-details',
    component: () => import(/* webpackChunkName: "login" */ '@/views/VenueDetails.vue'),
    meta: {
      breadcrumbs: [
        { title: 'Venue Details' },
      ]
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "login" */ '@/views/SearchGames.vue'),
    // beforeEnter: checkAuth,
    meta: {
      breadcrumbs: [
        { title: 'Search Games' }
      ]
    }
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
    path: '/register-user',
    name: 'register-user',
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/RegisterUser.vue'),
    beforeEnter: isLoggedIn
  },
  {
    path: '/register-owner',
    name: 'register-owner',
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/RegisterOwner.vue'),
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
    next('/dashboard')
  } else {
    next()
  }
}




export default routes