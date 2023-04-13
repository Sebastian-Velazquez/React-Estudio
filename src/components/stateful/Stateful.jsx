/* stateful es para que los comonetes no sean estaticos, osea que se pueda cambar la proiedad una vez ya renderizado la agina */

import React, { Component} from 'react'

class Stateful extends Component {
  render () { return (
    <div>stateful</div>
  )}
}

export default Stateful