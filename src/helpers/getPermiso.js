import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const menu = ref([])

const getPermiso = async(id)=>{
   
    const {data}= await baseApi.get('permisoUsuario', {
        params:{ id_usuario : id}})
    menu.value=data.resultado
    return menu.value
}

export default getPermiso

