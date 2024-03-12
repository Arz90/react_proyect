import React from "react";

function List(props) {
  const data = props.data;

  data.forEach((e) => {
    html += `<li>${e}</li>`;
  });

  return <div>Hola: {props.data}</div>;
}

export default List;
