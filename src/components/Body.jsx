/* rfce : Nos plantea toda las estructura que necesitamos*/
import React from 'react'
import ListadoProducos from './ListadoProductos'

function Body() {
  return (
    <React.StrictMode>
    <div>
      <ListadoProducos/>
    </div>
    </React.StrictMode>
  )
}

export default Body