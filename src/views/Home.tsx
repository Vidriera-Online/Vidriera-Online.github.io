import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import * as apiService from '../apiServiceDev'

import StoreRouteParamsType from '../types/StoreRouteParams'
import StoreType from '../types/Store'

import StoreCarrousel from '../components/StoresCarrousel'
import Container from '../styled/Container'

// ANY HASTA Q SEPAMOS LO Q PASAMOS
const Store = (props : any) => {
    // Hay que definir como son las props de la ruta asi no rompe
    const { id } = useParams<StoreRouteParamsType>(), // CON ESTO CARGAMOS EL ID DE LA RUTA
        [stores, setStores] = useState<Array<StoreType> | []>([]),
        [error, setError] = useState<string>("")

    useEffect(() => {
        apiService
            .getStores()
            .then(res => {
                setStores(res.content)
                setError("")
            })
            .catch(err => {
                setStores([])
                setError(err.message)
            })
        return() => {}
    }, [id])

    return(
        <>
            {
                !error && !stores ?
                    <>
                        Cargando
                    </> :
                    error ? 
                        <>
                            {error}
                        </> :
                        <Container>
                            <div>
                                <h2 style={{margin: 0, marginLeft: '10px'}}>Populares</h2>
                                <StoreCarrousel stores={stores} />
                            </div>
                        </Container>
            }
        </>
    )

}

export default Store;