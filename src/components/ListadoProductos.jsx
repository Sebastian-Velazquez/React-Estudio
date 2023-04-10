/* rfce : Nos plantea toda las estructura que necesitamos*/
import React from 'react'
import Producto from './Producto'

function Productos() {
  return (
    <React.StrictMode>
      <h2>Listad de Productos:</h2>
      <Producto/>
      <Producto/>
      <Producto/>
      
    </React.StrictMode>
  )
}

export default Productos