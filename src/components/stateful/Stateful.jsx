/* stateful es para que los comonetes no sean estaticos, osea que se pueda cambiar la proiedad una vez ya renderizado la pagina 
El construcor es deonde se pone el valor determinado inicial
statey setState: para poner estados*/

import React, { Component} from 'react'

class Stateful extends Component {

  constructor(props) { /* Es como declararar, no lo tengo muy claro */
    super(props);
    this.state = {
      numero: props.inicial 
    }
  }

  incrementar (){ /* Es como una function que creamos */
    this.setState( { numero : this.state.numero + 1})
  }

  decrementar (){ /* Es como una function que creamos */
    this.setState( { numero : this.state.numero - 1})
  }

  render () { 
    return ( /* Se define la propeidad estatica que arranca ela pagina */
      <div>
        <p>soy el numero {this.state.numero}</p>
        <button onClick={()=>this.incrementar()}>Incrementar</button>
        <button onClick={()=>this.decrementar()}>Decrementar</button>
      </div>
  )}
}

export default Stateful