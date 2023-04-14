import React, { Component } from 'react'

class Eventos extends Component {
    lanzarAlerta(){
        alert("Me clickeaste!!")
    }

    cambiarAmarillo(){
        document.querySelector("body").style.backgroundColor = "Yellow"
    }
    
    cambiarRosa(){
        document.querySelector("body").style.backgroundColor = "Pink"
    }
    
    render (){
        return (
            <div  onClick={ this.lanzarAlerta } onMouseOver={ this.cambiarAmarillo } onMouseOut = { this.cambiarRosa }> {/* si ponemos los parentesis se ejecuta ahoara. sino lo asociamos a un evento */}
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos expedita assumenda id inventore magni maxime nihil dolorem eligendi quisquam optio unde, labore numquam, nam recusandae a maiores, rerum vitae distinctio?</p>
            </div>
        )
    }
}

export default Eventos