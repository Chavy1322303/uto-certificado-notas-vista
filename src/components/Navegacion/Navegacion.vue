<template>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-toggle target="sidebar-variant" class="collapsed">
        <b-icon  icon="list"></b-icon>
         
      </b-navbar-toggle>

      <b-navbar-brand >
        <div  class="d-flex flex-row">
          <div class="p-3 btn-dark" @click="volver"> <b-icon icon="reply-fill"/> Volver</div>
          <div class="p-3 btn-dark" @click="desloguear"> <b-icon icon="door-open-fill"/> Salir</div>
        </div>
        
      </b-navbar-brand>

      <b-sidebar id="sidebar-variant" bg-variant="dark" text-variant="light" shadow>
        <b-card bg-variant="dark" text-variant="white" title="">
          <div class="card-body text-center">
            <img src="@/assets/imagenes/icono-perfil.jpg" class="img-fluid rounded-circle mb-2" width="64" height="64" />
            <h5 class="card-title mb-0">{{usuario.paterno}} {{usuario.materno}} {{usuario.nombres}}</h5>
            <div class="mb-2">
                <b-select
                v-model="selected"
                :options="roles"
                class="b-btn dark"
                value-field="id_rol"
                text-field="rol"
                disabled-field="notEnabled"
                ></b-select>
            </div>
          </div>
        </b-card>
          
        <MenuVue :idMenu="selected" :usuario="usuario" :ud="4"/>
      </b-sidebar>
    </b-navbar>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import getRoles from '@/helpers/getRoles'

export default {
  props:{
    idUsuario:null,
    usuario:null,

  }
  ,data(){
    return{
      roles:[],
      selected: localStorage.menu,
      menu:0
    }
  }
  ,components:{
    MenuVue: defineAsyncComponent( () => import ('@/components/Navegacion/menu.vue') )
  }
  ,methods:{
    async rol(){
      this.roles = await getRoles(this.idUsuario)
    },
    desloguear(){
      localStorage.removeItem('sesion')
      localStorage.removeItem('usuario')
      localStorage.removeItem('f')
      localStorage.menu=94 //dato igual eliminar
      this.$router.push("/login")
    },
    volver(){
      this.$router.go(-1)
    }
  },
  mounted(){
    this.rol()
  }
}
</script>

<style>

b-sidebar :focus-visible{
  margin-left: 300px;
}

b-sidebarhide {
  margin-left: 0px;
}
</style>