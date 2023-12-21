<template>
    <div class="card">
        <div class="card-body">
            <div class="m-sm-4">
                <div class="text-center">
                    <img src='@/assets/imagenes/icono-perfil.jpg' alt="Charles Hall" class="img-fluid rounded-circle" width="132" height="132" />
                </div>
                <form  @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <label class="fs-5 text-muted">Cuenta</label>
                        <input class="fs-6 fw-light form-control form-control-lg" type="text" name="email" placeholder="Ingrese su cuenta" required/>
                    </div>
                    <div class="mb-3">
                        <label class="fs-5 text-muted">Contraseña</label>
                        <input class="fs-6 fw-light form-control form-control-lg" type="password" name="password" placeholder="Ingrese su contraseña" required/>
                    </div>
                    <div class="text-center mt-3">
                        <button type="submit" class="btn btn-lg btn-primary">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import getUsuario from '@/helpers/getUsuario'
import getPermiso from '@/helpers/getPermiso'
export default {
    data(){
        return{
            usuario:"",
            password:"",
            usuario_aux:"",
            password_aux:"",
            dato:null,
            facultad:null
        }
    },
    methods:{
        loguear(){
            if(this.usuario==="isa" && this.password==="isa"){
                localStorage.sesion=true
                localStorage.usuario=8
                localStorage.menu=94
                this.facultad=getPermiso(localStorage.usuario)
                localStorage.f=this.facultad.id_facultad
            }
            else
                localStorage.removeItem('sesion')
        },
        onSubmit(event) {
            this.usuario = event.target.elements.email.value
            this.password = event.target.elements.password.value
            this.loguear()
            this.$router.push("/home")
        }
    }
}
</script>

<style>

</style>