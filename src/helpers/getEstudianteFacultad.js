import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const estudiantes = ref([])

const filtrarNombreFacultad = async(cad,f)=>{
    let dato={
        nombre:cad,
        id_facultad:f
    }

    const {data}= await baseApi.post('filtrarByNombreFacultad',dato)
        estudiantes.value=data.resultado
        return estudiantes.value
    }

export default filtrarNombreFacultad 