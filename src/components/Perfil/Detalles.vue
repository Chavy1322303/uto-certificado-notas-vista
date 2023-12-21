<template>
    <b-card align="center">
        <template #header >
          <h5 class="b-card-tittle">Detalle de Perfil</h5>
        </template>
          <img src="@/assets/imagenes/icono-perfil.jpg" alt="Christina Mason" class="img-fluid rounded-circle mb-2" width="64" height="64" />
          <h5 class="card-title mb-0">{{usuario.nombres}} {{usuario.paterno}} {{usuario.materno}}</h5>
          <div class="text-muted mb-2 p-4">{{rol.rol}}</div>
        
    </b-card>
</template>

<script>
import getUsuario from '@/helpers/getUsuario'
import getRol from '@/helpers/getRol'
export default {

  data(){
    return{
      usuario:null,
      rol:null
    }
  },

  methods:{
    async datos(){
      this.usuario= await getUsuario(localStorage.usuario)
    },
    async menu(){
      this.rol= await getRol(localStorage.usuario,localStorage.menu)
    },
  },
  mounted(){
      console.log(localStorage.usuario)
    this.datos()
    this.menu()
    console.log(this.rol)
  }

}
</script>

<style>

</style>