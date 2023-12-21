<template>
    <div>
      <b-container fluid class="p-5" >
        <b-row align-v="center">
          <b-col offset-md="3">
            <h2>Certificado de Calificaciones</h2>
            <b-input-group  size="lg" class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input 
              v-model="nombreBusqueda" 
              @keyup.enter="filtrar"
              type="search" 
              placeholder="Ingrese nombre..." 
              :formatter="formatter"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>     
      </b-container>
      <b-container fluid class="p-1" >
        <b-row align-v="center" class="p-2">
          <b-col sm="10"  md="9"  offset-md="3">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="fill"
              size="sm"
              class="my-0"
              variant='dark'
              first-number
              last-number
              prev-text="Anterior"
              next-text="Siguiente"
            ></b-pagination>
          </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col  offset-md="3">
              <b-overlay :show="show" rounded="sm">
              <div>
                <b-table
                :striped="striped"
                :current-page="currentPage"
                :per-page="perPage"
                :select-mode="selectMode"
                :bordered="bordered"
                :sticky-header="stickyHeader"
                :small="small"  
                responsive
                :fixed="fixed"
                :items="items"
                :fields="fields"
                :head-variant="headVariant"
                ref="selectableTable"
                selectable
                @row-selected="onRowSelected"
                
                >
                <template #cell(selected)="{ rowSelected }" >
                  <template v-if="rowSelected" >
                    <div align-v="center"><b-icon icon="arrow-right-square" scale="2" variant="success"></b-icon></div>
                  </template>
                  <template v-else>
                    <div align-v="center"><b-icon icon="arrow-right-square" scale="2" variant="info"></b-icon></div>
                  </template>
                </template>
                </b-table>
              </div>
              <template #overlay>
                <div class="text-center">
                  <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
                  <p id="cancel-label">Cargando...</p>
                </div>
              </template>
              </b-overlay>
            </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
  import filtrarNombre from '@/helpers/getEstudiantes'
  import filtrarNombreFacultad from '@/helpers/getEstudianteFacultad'
  export default {
    data() {
      return {
        show:false,
        dato:null,
        idVer:null,
        nombreBusqueda: '',
        totalRows:1,
        perPage:10,
        currentPage:1,
        fields: [
          {
            key:'abrev',
            label:'Facultad',
            class:'md-4'
            },
          {
            key:'programa',
            label:'Carrera',
            class:'md-6'
            },
          {
            key:'nombre',
            label:'Universitario',
            class:'md-6'
            },
          {
            key:'selected',
            label:'Seleccionar',
            class:'text-center md-4'
            }
        ],
        items: [],
        striped: true,
        bordered: true,
        small: false,
        fixed: true,
        selectMode:'single',
        stickyHeader: false,
        headVariant: "dark"
      }
    },
    methods:{
      onRowSelected(items) {
        this.dato =items.at(0).id_estudiante
        this.$router.push({name:"/universitarioGestion", params: {id_estudiante:this.dato}})
      },
      async filtrar(){
        this.show=true
        if(localStorage.f!='A')
          this.items=await filtrarNombreFacultad(this.nombreBusqueda,localStorage.f)
        else
          this.items=await filtrarNombre(this.nombreBusqueda)
        this.totalRows = this.items.length
        this.show=false
      },
      formatter(value) {
        return value.toUpperCase()
      }
    },
    watch:{
        
    }
  }
</script>

<style>

</style>
