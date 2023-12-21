import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const carreras = ref([])

const filtrarCarreraByFacultad = async(id)=>{
    const {data}= await baseApi.get('filterCarreraByFacultad',{
        params:{ id_facultad  : id}})
        carreras.value=data.resultado
        return carreras.value
    }

export default filtrarCarreraByFacultad  
