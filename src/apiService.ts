const apiUrl : string = process.env.NODE_ENV === "production" ?
    window.location.origin :
    'http://localhost'

const get = async (path : string, querys : any = {}) => {
    let params = ""
    for(let param in querys){
        params += `&${param}=${querys[param]}`
    }
    return await fetch(`${apiUrl}:5000/api/${path}/?${params}`)
        .then(res => res.json()
        .then(res => {
            if(res.status !== 200) throw new Error(res.message)
            return res
        }))
}

export const getStores = async (page = 0, pageSize = 10) =>
    await get(`stores`, {
        page,
        pageSize
    })

export const getStore = async (id : string) => {
    if(!id) throw new Error("Hace falta un ID para obtener el local")
    return await get(`stores/${id}`)
}