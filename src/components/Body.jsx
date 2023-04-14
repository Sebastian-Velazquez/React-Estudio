/* rfce : Nos plantea toda las estructura que necesitamos*/
import React from 'react'
import ListadoProducos from './ListadoProductos'
import '../assets/css/App.css';
import Props from './Props/Props';
import PropsChildren from './Props/PropsChildren/PropsChildren';
import Stateful from './stateful/Stateful';
import Eventos from './eventos/Eventos';
import CicloDeVida from './cicloDeVida/CicloDeVida';
import ConsumirApis from './cosumirApis/ConsumirApis';

function Body() {
  return (
    <React.StrictMode>
      {/* Inicio Props */}
        {/* <Props generos={["Fantasa", "Aventura"]}  titulo="Harry Potter"/>
        <Props rating="1.3" titulo="Harry Potter"/>
        <PropsChildren>
          <h2>Wowwwwwwww!! Publicidad</h2>
        </PropsChildren>
        <Props generos={["Fantasa", "Aventura"]} rating="10.0" titulo="Harry Potter"/>
        <PropsChildren>
        <h2>Wowwwwwwww!! Seguda Publicidad</h2>
        <Stateful inicial ={0} />
        </PropsChildren> */}
      {/* Fin Props */}
        {/* <Eventos/>
        <CicloDeVida inicial ={0}/> */}
        <ConsumirApis/>
    </React.StrictMode>
  )
}

export default Body