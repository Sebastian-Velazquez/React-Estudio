//los props son como funciones. Que donde esta llamado el componente se les asigna los valores que cambian.
import React from 'react'

function Props(props) {
/*     let genero=["Accion", "Drama"] */
  return (
    <div>
        <h2 className='sarasa'>{props.titulo}</h2>
        <p>Rating: {props.rating}</p>
        <ul>
            {props.generos.map((genero , i) => <li key={genero + i}>{genero}</li>)} {/* Las props despues un map,, llevan un key donde es llamada */}
        </ul>
    </div>
  )
}

/* defaultProps asigna un valor por si este a la hora de renderizar tura error */
Props.defaultProps={
    rating: "esta pelicula todavia no fue valorizada"
}

export default Props