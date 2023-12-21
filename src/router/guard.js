const isValid = (to,from,next)=> {
    console.log(localStorage.sesion)
    return new Promise( () =>{
        if(to.name!=='login' && localStorage.sesion!=="activo")
            next({name:'login'})
        else
            next()
    })
}

export default isValid