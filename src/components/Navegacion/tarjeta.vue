<template>
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
</template>

<script>
import getRoles from '@/helpers/getRoles'
export default {
    props:{
        usuario:{}
    }
    ,data(){
        return{
            roles:[],
            selected: 0
        }
    },
    methods:{
        async rol(id){
            this.roles = await getRoles(id)
        }
    },
    mounted(){
        console.log(usuario)
        console.log(this.rol(this.usuario.id_usuario))
    }
}
</script>

<style>

</style>