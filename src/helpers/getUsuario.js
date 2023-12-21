import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const usuario = ref ([])

const getUsuario = async(id)=>{
   
    const {data}= await baseApi.get('perfil', {
        params:{ 
            id_usuario : id
        }
    })
    usuario.value=data.resultado
    
    return usuario
}

export default getUsuario
