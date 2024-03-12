import React, { useState } from "react";

function Armario() {
  const prendas = [
    '/img/shop1.jpg',
    '/img/shop2.jpg',
    '/img/shop3.jpg',
    '/img/shop4.jpg',
  ];

  const [contador, setContador] = useState(0); 

  const cambiarImagen = (direccion) => {
    if (direccion === "siguiente") {
      setContador((prevContador) => (prevContador + 1) % prendas.length);
    } else {
      setContador((prevContador) => (prevContador - 1 + prendas.length) % prendas.length);
    }
  };

  return (
    <div className="container">
      <img className="clothes" src={prendas[contador]} alt={`Prenda ${contador + 1}`}/>
      <br/>

      <button className="click" onClick={() => cambiarImagen("anterior")}>
      &lt;&lt; Anterior
      </button>

      <button  className="click" onClick={() => cambiarImagen("siguiente")}>
      Siguiente &gt;&gt;
      </button>
    </div>
  );
}

export default Armario;
