import baseApi from "@/api/baseApi";
import { ref } from 'vue'
const roles = ref([])

const getRoles = async(idUsuario) =>{
    const { data } = await baseApi.get('roles',{
        params : {id_usuario : idUsuario}
    })
    roles.value = data.resultado
    return roles
}

export default getRoles