import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const facultades = ref([])

const filtrarFacultadById = async(id)=>{
    const {data}= await baseApi.get('filtrarFacultadById',{
        params:{ id_facultad  : id}})
        facultades.value=data.resultado
        return facultades.value
    }

export default filtrarFacultadById  
