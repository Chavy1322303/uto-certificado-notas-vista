import baseApi from "@/api/baseApi";


const imprimirUsuario = async (id,gest)=>{
    
    let dato={
        id_estudiante : id,
        gestiones : gest
    }
    const {data} = await baseApi.post('certificado/universitario', dato)
}

export default imprimirUsuario