import React from "react";
import '../stylesheets/Boton.css';

const isOperator = valor =>{
  return isNaN(valor) && (valor != '.') && (valor != '=');
};

function Boton(props){
  return(
    <div 
      className={`contenedor-boton ${isOperator(props.children) ? 'operador' : null}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;