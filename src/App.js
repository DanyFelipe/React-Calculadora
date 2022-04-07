import './App.css';
import logoCalculadora from './images/logo.png'
import Boton from './components/Boton';
import Pantalla from './components/Screen';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calcularResul = () => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Ingrese los datos");
    }
  }

  return (
    <div className='App'>
      <div className='contenedor-titulo'>
        <h1 className='titulo'>RETRO CALCULATOR</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={ addInput }>1</Boton>
          <Boton manejarClick={ addInput }>2</Boton>
          <Boton manejarClick={ addInput }>3</Boton>
          <Boton manejarClick={ addInput }>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ addInput }>4</Boton>
          <Boton manejarClick={ addInput }>5</Boton>
          <Boton manejarClick={ addInput }>6</Boton>
          <Boton manejarClick={ addInput }>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ addInput }>7</Boton>
          <Boton manejarClick={ addInput }>8</Boton>
          <Boton manejarClick={ addInput }>9</Boton>
          <Boton manejarClick={ addInput }>x</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ calcularResul }>=</Boton>
          <Boton manejarClick={ addInput }>0</Boton>
          <Boton manejarClick={ addInput }>.</Boton>
          <Boton manejarClick={ addInput }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={ () => setInput('') }>
            Limpiar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
