import React from "react";

function Cabecera(props) {
  return (
    <div className="items">
      <h1 className="title">PROFILE</h1>
      <p>{props.nombre}</p>
      <p>{props.apellidos}</p>
      <p>{props.direccion}</p>
      <p>{props.ciudad}</p>
    </div>
  );
}

export default Cabecera;
