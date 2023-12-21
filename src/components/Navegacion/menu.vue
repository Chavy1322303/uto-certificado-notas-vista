<template>
    <div class="px-3 py-2">
        <b-card v-for="menu in menus" 
            :key="menu.id" bg-variant="dark" border-variant="dark" text-variant="light">
      
            <template v-if="menu.enlaces.length > 0">
                
                <b-button v-b-toggle="'collapse-1'" variant="dark"> {{menu.enlace}} <b-icon icon="caret-down"></b-icon></b-button>
                <b-collapse id="collapse-1" style="bg-dark">
                    <b-card v-for="senlace in menu.enlaces" :key="senlace.id" bg-variant="dark" border-variant="dark" text-variant="light">
                        <template  v-if="senlace.enlaces.length > 0">
                            <b-button v-b-toggle="'collapse-2'" variant="dark"> {{senlace.enlace}} <b-icon icon="caret-down"></b-icon></b-button>
                            <b-collapse id="collapse-2" style="bg-dark">
                                <b-card v-for="senlaces in senlace.enlaces" :key="senlaces.id" bg-variant="dark" border-variant="dark" text-variant="light">
                                <router-link class="btn-dark w-100" :to="senlaces.ruta">{{senlaces.enlace}}</router-link>
                                </b-card>
                            </b-collapse>
                        </template>
                        <template v-else>
                            <router-link class="btn-dark w-100" :to="senlace.ruta">{{senlace.enlace}}</router-link>
                        </template>
                    </b-card>
                </b-collapse>
            </template>
            <template v-else>
              <router-link class="btn-dark w-100" :to="{name:`${menu.ruta}`}">{{menu.enlace}}</router-link>
            </template>
        </b-card>
    </div>
</template>

<script>
import getMenu from '@/helpers/getMenu'
export default {
  props:{
    idMenu:null,
    usuario:null
  },
  data(){
    return{
      menus:[],
      usuario:null,
      datos:null
    }
  },
  methods:{
    async menu(id){
      this.menus=await getMenu(id)
    },
    volver(){
      this.$router.push({name:"principal"})
    }
  },
  watch:{
    idMenu(){
      this.menu(this.idMenu)
      localStorage.menu=this.idMenu
      this.volver()
    }
  },
  mounted(){
    this.menu(this.idMenu)
  }
}
</script>

<style>

</style>