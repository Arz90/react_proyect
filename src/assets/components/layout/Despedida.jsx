import React from "react";

function Despedida(props) {
  return (
    <div className="items">
      <h1 className="title">CONTACT</h1>
      <p>Contacto: {props.contacto}</p>
      <p>Cualidades: {props.cualidades}</p>
      <p>Disponibilidad: {props.disponibilidad}</p>
    </div>
  );
}

export default Despedida;
