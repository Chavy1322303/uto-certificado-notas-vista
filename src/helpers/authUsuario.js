import baseApi from '@/api/baseApi'

    const login = async(user,password)=>{
    const user_aux=''
    const password_aux=''
    const usuario = { user, password ,user_aux,password_aux};
    return await baseApi.post('', usuario);
}

export default login