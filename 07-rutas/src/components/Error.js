import React from 'react'
import { Link } from 'react-router-dom'


export const Error = () => {

  return (

    <div>
        <h1>Error: 404</h1>
        <strong>Esta pagina no existe</strong>
        
        <br/> <br/>

        <Link to="/Inicio">Volver al inicio</Link>
    </div>

  )
}
