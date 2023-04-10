import React from 'react';//para que funcine  <React.StrictMode>
//import logo from '../assets/images/logo.svg'; //se puede usar las imagenes como variable. liena 8 se pude ver
import '../assets/css/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (//solo se puede devolver un elemento html. por eso guardarun una sola etiqueta
    <React.StrictMode>
      <Header/>
      <Body/>
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
