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