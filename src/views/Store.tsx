import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import * as apiService from '../apiServiceDev'

import StoreRouteParamsType from '../types/StoreRouteParams'
import StoreType from '../types/Store'

// ANY HASTA Q SEPAMOS LO Q PASAMOS
const Store = (props : any) => {
    // Hay que definir como son las props de la ruta asi no rompe
    const { id } = useParams<StoreRouteParamsType>(), // CON ESTO CARGAMOS EL ID DE LA RUTA
        [store, setStore] = useState<StoreType | null>(null),
        [error, setError] = useState<string>("")

    useEffect(() => {
        apiService
            .getStore(Number.parseInt(id))
            .then(res => {
                setStore(res.content)
                setError("")
            })
            .catch(err => {
                setStore(null)
                setError(err.message)
            })
        return() => {}
    }, [id])

    return(
        <>
            {
                !error && !store ?
                    <>
                        Cargando
                    </> :
                    error ? 
                        <>
                            {error}
                        </> :
                        <>
                            <p>Local con id: <b>{id}</b></p>
                            <p>Nombre: <b>{store?.name}</b></p>
                            <p>Ubicacion: <b>{store?.place}</b></p>
                            <p>Instagram: <b>{store?.socialLinks.instagram}</b></p>
                            <p>Facebook: <b>{store?.socialLinks.facebook}</b></p>
                            <p>Whatsapp: <b>{store?.socialLinks.whatsapp}</b></p>
                        </>
            }
        </>
    )

}

export default Store;