<template>
    <div>
        <b-container fluid class="bv-example-row p-5" >
            <b-row>
                <b-col md="3" offset-md="3">
                    <DetallesVue />
                    
                </b-col>
                <b-col  >
                    <HistorialVue/>
                </b-col>
            </b-row>
        </b-container>
        
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    mounted(){
       
    }
    ,data(){
        return {
            
        } 
    }
    ,methods:{
        llenar(){
        }
    }
    ,components:{
        DetallesVue : defineAsyncComponent( () => import('@/components/Perfil/Detalles.vue') ),
        HistorialVue: defineAsyncComponent( () => import('@/components/Perfil/Historial.vue') )
    }
}
</script>

<style>

</style>