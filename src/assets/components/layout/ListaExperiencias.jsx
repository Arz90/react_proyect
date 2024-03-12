import React from "react";
import Experiencia from "./Experiencia";

function ListaExperiencias(props) {
  const experiencias = [
    { empresa: "Coca-cola", cargo: "Operario de linea produccion" },
    { empresa: "Apple", cargo: "Desarrollador web" },
    { empresa: "Amazon", cargo: "Diseñador app" },
    { empresa: "Frog", cargo: "Diseñador" },
  ];

  return (
    <>
      <h1 className="title">EXPERIENCE</h1>
      <Experiencia data={experiencias[0]} />
      <Experiencia data={experiencias[1]} />
      <Experiencia data={experiencias[2]} />
      <Experiencia data={experiencias[3]} />
    </>
  );
}

export default ListaExperiencias;
