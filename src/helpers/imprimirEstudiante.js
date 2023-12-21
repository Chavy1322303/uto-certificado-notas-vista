import axios from "axios";
const imprimirEstudiante = async(id,gest) => {
    let dato={
        
    }
    axios.request({
      url: 'http://localhost:8081/certificado/universitario',
      method: 'GET',
      params: {
        id_estudiante : id
      }
    })
      .then(response => response.data)
      .then(blob => {
        const data = URL.createObjectURL(blob)
        var link = document.createElement('a')
        link.href = data
        link.target = '_blank'
        link.click()
        window.URL.revokeObjectURL(blob)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  export default imprimirEstudiante