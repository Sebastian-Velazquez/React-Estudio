//los props son como funciones. Que donde esta llamado el componente se les asigna los valores que cambian.
import React from 'react'
import  PropTypes  from 'react';


function Props(props) {
    /* let genero=["Accion", "Drama"] */
    let  listadoDeGenero;
  if (props.generos != null){
    listadoDeGenero =
    <ul>
    {props.generos.map((genero , i) => <li key={genero + i}>{genero}</li>)} {/* Las props despues un map,, llevan un key donde es llamada */}
  </ul>
  }else{
    listadoDeGenero = ""
  }
  return (
    <div>
        <h2 className='sarasa'>{props.titulo}</h2>
        <p>Rating: {props.rating}</p>
        {listadoDeGenero}
    </div>
  )
}
  /* defaultProps asigna un valor por si este a la hora de renderizar tura error */
  Props.defaultProps={
      rating: "esta pelicula todavia no fue valorizada",
      generos: null
  }
  
  /* PropTypes es para definir el tipo de dato que corresponde, esto no afecta el funcionaminto*/
  Props.propTypes = {
    rating: PropTypes.number,
    generos: PropTypes.string,
  }

export default Props