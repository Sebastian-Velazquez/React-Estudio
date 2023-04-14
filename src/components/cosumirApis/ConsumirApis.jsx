import React, { Component } from 'react'

class ConsumirApis extends Component {

    constructor(props){
        super(props);
        this.state = {
            apiUsario: []
        }
    }

    apiCall(url, consecuecia){
        fetch(url)
            .then( response =>  response.json())
            .then( data=> consecuecia(data))
            .catch( e => console.log(e))
    }

    componentDidMount(){
        console.log("Me monte!") /** https://api.giphy.com/v1/gifs/random?api_key=lp7wQ6914aPRmDI6HePRPpQeZXyxLFkU&tag=&rating=G */
        this.apiCall("http://localhost:3001/api/users", this.mostrarUsuario)
    }

    mostrarUsuario = (data) =>{
        console.log(data)
        this.setState(
            {
                apiUsario: data.data.map( imprimir => imprimir = <p>{imprimir.first_name}</p> 
                    /* console.log(imprimir.first_name + " Hola") */
                    )
                
            }
        )
    }

    componentDidUpdate(){
        console.log("Me actualicé")
    }

    render(){
        console.log("estoy renderizando");
        /* por si la api esta cargando todavia */
        let contenido;
        if(this.state.apiUsario == ""){
            contenido = <p>Cargando...</p>
        }else{
            contenido = <p>{this.state.apiUsario}</p>
        }
    return (
        <div>
            {contenido}
        </div>
        )
    }

}

export default ConsumirApis
