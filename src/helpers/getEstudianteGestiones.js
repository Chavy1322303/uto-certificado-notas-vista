import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const estudiantes = ref([])

const filtrarEstudiante = async(id)=>{
    const {data}= await baseApi.get('filtrarByEstudiante', {
        params:{ idEstudiante : id}})
        estudiantes.value=data.resultado
        return estudiantes.value
    }

export default filtrarEstudiante