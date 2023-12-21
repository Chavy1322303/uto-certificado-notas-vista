<template>
  <main class="d-flex w-75 container-md">
		<div class="container d-flex flex-column">
			<div class="row vh-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<Titulo/>

						<Tarjeta/>

					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import Tarjeta from '../components/Login/Tarjeta.vue'
import Titulo from '../components/Login/Titulo.vue'
export default {
   components:{
    Titulo,
	Tarjeta
   }
}
</script>

<style scoped>

  /* background-color: rgb(245, 248, 248); */
</style>