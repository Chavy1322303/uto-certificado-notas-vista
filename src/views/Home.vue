<template>
  <div class="home">
    <NavegacionVue :idUsuario="usuario.id_usuario" :usuario="usuario"/>
    <router-view/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import getUsuario from '@/helpers/getUsuario'
export default {
  name: 'HomeView',
  components: {
    NavegacionVue: defineAsyncComponent(()=>import('@/components/Navegacion/Navegacion.vue'))
  },
  data(){
    return{
      usuario:null
    }
  },
  methods:{
    async datos(){
      this.usuario= await getUsuario(localStorage.usuario )
    },
  },
  mounted(){
    this.datos()
  }

}
</script>
