import baseApi from "@/api/baseApi";
import { ref } from 'vue'
const roles = ref([])

const getRol = async(idUsuario,idRol) =>{
    const { data } = await baseApi.get('getRolById',{
        params : {id_usuario : idUsuario,id_rol:idRol}
    })
    roles.value = data.resultado
    return roles
}

export default getRol