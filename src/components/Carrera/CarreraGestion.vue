<template>
  <div>
      <b-container fluid class="bv-example-row p-5" >
        <b-row align-v="left">
          <b-col offset-md="3" class="text-center md-4" >
            <b-row>
              <b-col cols="6">
                <h3>Certificado de calificaciones por Carrera</h3>
                
              </b-col>
            </b-row>
            
          </b-col>
        </b-row>      
      </b-container>
      <b-container fluid class="bv-example-row" >
        <b-row>
            <b-col offset-md="3">
                <h4>Elija Semestre a imprimir</h4>
            </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col  offset-md="3">
              <b-overlay :show="show" rounded="sm">
              <div>
                <b-table
                class="b-table"
                :striped="striped"
                :bordered="bordered"
                :fixed="fixed"
                :items="items"
                :fields="fields"
                :head-variant="headVariant"
                >
                <template #cell(imprimir)="row" >
                    <b-button 
                        size="lg" 
                        class="mb-2" 
                        @click="imprimir(row.item)"
                        >
                        <b-icon icon="printer-fill" ></b-icon>
                    </b-button>
                </template>
                </b-table>
              </div>
              </b-overlay>
            </b-col>
        </b-row>
        
      </b-container>
    </div>  
</template>

<script>
  import  filtrarCarreraByGestion from '@/helpers/getCarreraByGestion'
  import baseApi from '@/api/baseApi'
  export default {
    data() {
      return {
        disabled:true,
        todo:true,
        show:true,
        striped: true,
        bordered: true,
        fixed: true,
        headVariant: "dark",
        id : null,
        ges : null,
        nombreArchivo:"",
        fecha:'',
        items:[],
        fields: [
          {
            key:'abrev',
            label:'Facultad',
            class:'text-center cols-12',
            width:'250px'
            },
          {
            key:'carrera',
            label:'Carrera',
            class:'text-center cols-12',
            width:'250px'
            },
          {
            key:'_gestion',
            label:'Gestion',
            class:'text-center cols-6'
          },
          {
            key:'imprimir',
            label:'Imprimir',
            class:'size text-center cols-6 '
            }
        ],
      }
    },
    methods:{
        imprimir(item) {
          this.fecha= new Date().toLocaleDateString()+'-'+new Date().toLocaleTimeString()
          this.id = item.id_carrera
          this.ges = item.id_gestion
          console.log(this.id,this.ges)
          baseApi.request('/certificado/carrera',{
            method: 'POST',
            responseType: 'blob',
            params: {
              id_carrera : this.id,
              id_gestion : this.ges
            }
          })
            .then(response => response.data)
            .then(blob => {
              const data = URL.createObjectURL(blob)
              var link = document.createElement('a')
              this.nombreArchivo='certificado_calificaciones_facultad_'+item.id_facultad+'_carrera_'+item.id_carrera   +'_'+item._gestion+'.pdf'
              link.href = data
              link.download = this.nombreArchivo
              link.target = '_blank'
              link.click()
              window.URL.revokeObjectURL(blob)
            })
            .catch((error) => {
              console.log(error)
            }) 
        }
    },
    watch:{
        
    },
    async mounted() {
      this.items=await filtrarCarreraByGestion(this.$route.params.id_carrera)
      
      this.show=false
    }
  }
</script>

<style scoped>

</style>