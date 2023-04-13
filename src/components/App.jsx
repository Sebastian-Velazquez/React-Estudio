import React from 'react';//para que funcine  <React.StrictMode>
//import logo from '../assets/images/logo.svg'; //se puede usar las imagenes como variable. liena 8 se pude ver
import '../assets/css/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Props from './Props/Props';
import PropsChildren from './Props/PropsChildren/PropsChildren';

function App() {
  return (//solo se puede devolver un elemento html. por eso guardarun una sola etiqueta
    <React.StrictMode>
      {/* <Header/> */}
      <Body/>
     {/*  <Props generos={["Fantasa", "Aventura"]}  titulo="Harry Potter"/>
      <Props rating="1.3" titulo="Harry Potter"/>
      <Footer/>
      <PropsChildren>
        <h2>Wowwwwwwww!! Publicidad</h2>
      </PropsChildren>
      <Props generos={["Fantasa", "Aventura"]} rating="10.0" titulo="Harry Potter"/>
      <PropsChildren>
      <h2>Wowwwwwwww!! Seguda Publicidad</h2>
      </PropsChildren> */}
    </React.StrictMode>
  );
}

export default App;
