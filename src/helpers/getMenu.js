import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const menu = ref([])

const getMenu = async(idRol)=>{
   
    const {data}= await baseApi.get('menu', {
        params:{ id_rol : idRol}})
    menu.value=data.resultado
    return menu.value
}

export default getMenu

