import baseApi from '@/api/baseApi'
import { ref } from 'vue'
const facultades = ref([])

const filtrarFacultad = async()=>{
    const {data}= await baseApi.get('filtrarFacultad')
        facultades.value=data.resultado
        return facultades.value
    }

    export default filtrarFacultad  