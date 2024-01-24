import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },  
    {
      path: '/registration2',
      name: 'registration2',
      component: () => import('../views/Registration2.vue')
    },
    {
      path: '/newPassword',
      name: 'newPassword',
      component: () => import('../views/NewPassword.vue')
    },
    {
      path: '/createPassword',
      name: 'createPassword',
      component: () => import('../views/CreatePassword.vue')
    },  
    {
      path: '/recoveryPassword',
      name: 'recoveryPassword',
      component: () => import('../views/RecoveryPassword.vue')
    },    
    {
      path: '/verification',
      name: 'verification',
      component: () => import('../views/Verification.vue')
    },
   
  ]
})

export default router