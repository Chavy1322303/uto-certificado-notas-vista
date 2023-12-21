import Vue from 'vue'
import VueRouter from 'vue-router'
// import isValid from'./guard';

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'principal',
    
    component:  () => import('@/views/Home.vue'),
    children:[
      {
        path: '/perfil',
        name: '/perfil',
        props:true,
        component: () => import('@/components/Perfil/Perfil.vue')
      },
      {
        path: '/universitario',
        name: '/universitario',
        component: () => import('@/components/Universitario/UniversitarioPage.vue')
      },
      {
        path: '/universitarioGestion/:id_estudiante',
        name: '/universitarioGestion',
        component: () => import('@/components/Universitario/HistorialGestion.vue')
      },
      {
        path: '/facultad',
        name: '/facultad',
        component: () => import('@/components/Facultad/FacultadPage.vue')
      },
      {
        path: '/facultadGestion/:id_facultad',
        name: '/facultadGestion',
        component: () => import('@/components/Facultad/FacultadGestion.vue')
      },
      {
        path: '/carrera',
        name: '/carrera',
        component: () => import('@/components/Carrera/CarreraPage.vue')
      },
      {
        path: '/carreraByFacultad/:id_facultad',
        name: '/carreraByFacultad',
        component: () => import('@/components/Carrera/CarreraFacultad.vue')
      },
      {
        path: '/carreraByGestion/:id_carrera',
        name: '/carreraByGestion',
        component: () => import('@/components/Carrera/CarreraGestion.vue')
      }
    ],
    
  }
  ,{
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
  
  ,{
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "is-active",
  linkActiveClass: "is-active",
})

router.beforeEach((to,from,next)=>{
  console.log(from.name,to.name)
  if(to.name!=='login' && !localStorage.sesion){
    next({name:'login'})
  }
    
  else{
    next()  
  }
    
})

export default router
