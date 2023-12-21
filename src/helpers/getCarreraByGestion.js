import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const carreras = ref([])

const filtrarCarreraByGestion = async(id)=>{
    const {data}= await baseApi.get('filterCarreraByGestion',{
        params:{ id_carrera  : id}})
        carreras.value=data.resultado
        return carreras.value
    }

export default filtrarCarreraByGestion  
