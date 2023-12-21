<template>
    <div>
      <b-container fluid class="bv-example-row p-5" >
        <b-row align-v="center">
          <b-col offset-md="3" class="text-center md-4" >
            <b-row>
              <b-col cols="6">
                <h5>Certificado de calificaciones de:</h5>
                <h5>{{this.nombre}}</h5>
              </b-col>
              <b-col cols="6">
                <b-button 
                  :disabled="disabled" 
                  size="lg" 
                  class="mb-2" 
                  target="_blank" 
                  @click="imprimir">
                  
                  <b-icon icon="printer-fill" ></b-icon>
                </b-button>
                <div v-if="todo" size="lg" class="mb-2" @click="selectAllRows" variant="outline">
                  <b-icon icon="square" ></b-icon>
                  <p>Seleccionar todo</p>                  
                </div>
                <div v-else size="lg" class="mb-2" @click="clearSelected" variant="outline">
                  <b-icon icon="check-square" variant="success" ></b-icon>
                  <p>Quitar seleccion</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>      
      </b-container>
      <b-container fluid class="bv-example-row" >
        <b-row>
            <b-col offset-md="3">
                <h5>Elija Semestre o semestres a imprimir</h5>
            </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col  offset-md="3">
              <b-overlay :show="show" rounded="sm">
              <div>
                <b-table
                responsive="true"
                :striped="striped"
                :bordered="bordered"
                :fixed="fixed"
                :items="items"
                :fields="fields"
                :head-variant="headVariant"
                ref="selectableTable"
                selectable
                @row-selected="onRowSelected"
                >
                <template #cell(selected)="{ rowSelected }" >
                  <template v-if="rowSelected">
                    <b-icon icon="check-square" scale="2" variant="success"></b-icon>
                  </template>
                  <template v-else>
                    <b-icon icon="square" scale="2" variant="info"></b-icon>
                  </template>
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
  import filtrarEstudiante from '@/helpers/getEstudianteGestiones'
  import baseApi from '@/api/baseApi'
  export default {
    data() {
      return {
        disabled:true,
        todo:true,
        show:true,
        nombre: '',
        id_estudiante:null,
        tam:0,
        striped: true,
        bordered: true,
        fixed: true,
        nombreArchivo:"",
        fecha:'',
        gestiones:[],
        items: [],
        headVariant: "dark",
        datos:[],
        fields: [
          {
            key:'abrev',
            label:'Facultad',
            class:'text-center cols-2'
            },
          {
            key:'programa',
            label:'Carrera',
            class:'text-left cols-8'
            },
          {
            key:'_gestion',
            label:'Gestion',
            class:'text-center cols-8'
          },
          {
            key:'selected',
            label:'Seleccionar',
            class:'text-center cols-2'
            }
        ],
      }
    },
    methods:{
      onRowSelected(items) {
        this.datos = items
        this.tam=this.datos.length
        this.filtrar()
      },
      async filtrar(){
        this.gestiones=[]
        this.datos.forEach(dato => {
          this.gestiones.push(dato.id_gestion)
        });        
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
        this.todo=false
        this.tam=this.datos.length
        this.filtrar()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
        this.todo=true
        this.tam=this.datos.length
        this.filtrar()
      },
      imprimir() {
        let cad="";
        this.gestiones.forEach(i => {
          cad=cad+i+'_'
        });
        this.fecha= new Date().toLocaleDateString()+'-'+new Date().toLocaleTimeString()
        baseApi.request('/certificado/universitario',{
          method: 'POST',
          responseType: 'blob',
          params: {
            id_estudiante : this.id_estudiante,
            cadena:cad
          }
        })
          .then(response => response.data)
          .then(blob => {
            const data = URL.createObjectURL(blob)
            var link = document.createElement('a')
            var t=cad.substring(0,cad.length - 1)
            link.href = data
            this.nombreArchivo = 'certificado_calificaciones_'+this.nombre+'_'+t+'.pdf'
            link.download =  this.nombreArchivo
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
        tam(value){
          if (value==0) {
            this.disabled=true
            this.gestiones=[]
          } else {
            this.disabled=false            
          }
        }
    },
    async mounted() {
      this.items=await filtrarEstudiante(this.$route.params.id_estudiante)
      this.nombre=this.items.at(0).nombre
      this.id_estudiante=this.items.at(0).id_estudiante
      this.show=false
    }
  }
</script>

<style>
</style>







