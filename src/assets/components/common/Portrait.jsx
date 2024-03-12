import React from "react";

function Portrait(props) {
  return (
    <div>
      <img class="photo" src={props.imagen}></img>
    </div>
  );
}

export default Portrait;
