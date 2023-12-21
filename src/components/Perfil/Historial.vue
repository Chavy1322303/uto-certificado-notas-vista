<template>
  <b-card align="left" border-variant="ligth" >
        <template #header >
          <h5 class="b-card-tittle">Historial de Impresion</h5>
        </template>
        <b-table striped="true" bordered="true"
        :items="items"
        :fields="fields" head-variant="dark"
        ></b-table>
        
    </b-card>
</template>

<script>
export default {
data() {
      return {
        fields: ['fecha_hora', 'Descripcion', 'Nom_Doc'],
        items: [
          { fecha_hora: '12/10/2022-14:55', Descripcion: 'General UTO', Nom_Doc: 'x.PDF' },
          { fecha_hora: '16/11/2022-10:40', Descripcion: 'General Carrera Sistemas', Nom_Doc: 'x.PDF' },
          { fecha_hora: '22/01/2023-16:07', Descripcion: 'Universitario Isabel Choque ', Nom_Doc: 'x.PDF' }
        ]
      }
    }
}
</script>

<style>

</style>