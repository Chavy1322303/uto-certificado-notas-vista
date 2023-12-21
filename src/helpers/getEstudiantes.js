import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const estudiantes = ref([])

const filtrarNombre = async(cad)=>{
    let dato={
        nombre:cad
    }

    const {data}= await baseApi.post('filtrarByNombre',dato)
        estudiantes.value=data.resultado
        return estudiantes.value
    }

export default filtrarNombre 