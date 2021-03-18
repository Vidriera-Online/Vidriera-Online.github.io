import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props : any) => {
    return(
        <>
            Wow parece que te perdiste 😟
            <br/>
            Te recomendamos estos links
            <br/>
            <div>
                <Link to='/'>Inicio</Link>
            </div>
        </>
    )
}

export default NotFound;