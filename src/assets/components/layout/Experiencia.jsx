import React from "react";

function Experiencia(props) {
  return (
    <div className="items">
      <p>Empresa: {props.data.empresa}</p>
      <p>Cargo: {props.data.cargo}</p>
    </div>
  );
}

export default Experiencia;
