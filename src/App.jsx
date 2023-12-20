import React from 'react';
import {Formulario} from './componente.jsx';
import {Aside} from "./aside.jsx";

export function App(props) {
  return (
    <div className='App'>
      <Aside/>
      <Formulario/>
    </div>
  );
}

// Log to console
console.log('Esta funcionando todo correcto')