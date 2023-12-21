<template>
    <div>
      <b-container fluid class="p-5" >
        <b-row align-v="center">
          <b-col offset-md="3">
            <h2>Elija una Carrera</h2>
          </b-col>
        </b-row>     
      </b-container>
      <b-container fluid class="p-1" >
        <b-row align-v="center">
            <b-col  offset-md="3">
              <b-overlay :show="show" rounded="sm">
              <div>
                <b-table
                :striped="striped"
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
  import filtrarCarreraByFacultad from '@/helpers/getCarreraByFacultad'
  export default {
    data() {
      return {
        show:false,
        dato:'',
        idVer:null,
        nombreBusqueda: '',
        fields: [
          {
            key:'abrev',
            label:'Abreviacion',
            class:'md-4'
            },
          {
            key:'carrera',
            label:'Carrera',
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
        this.dato =items.at(0).id_carrera
        this.$router.push({name:"/carreraByGestion", params: {id_carrera:this.dato}})
      },
      formatter(value) {
        return value.toUpperCase()
      }
    },
    watch:{
        
    },
    async mounted(){
        this.show=true

        console.log(this.$route.params.id_facultad)
        this.items=await filtrarCarreraByFacultad(this.$route.params.id_facultad)
        this.show=false
    }
  }
</script>

<style>

</style>
