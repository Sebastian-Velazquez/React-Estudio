/* Children es para cuando uno nosabeque poner y maso menos tiene unaestructura armada, el con tenido se pone en el padre */
import React from 'react'
import "./PropsChildren.css"

function PropsChildren(props) {
  return (
    <div>
        <p>--Inicio de espacio Publicitario</p>
        {props.children}
        <p>--Fin de espacio Publicitario</p>
    </div>
  )
}

export default PropsChildren