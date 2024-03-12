import React, { useState } from "react";

function Contador() {  


  const [contador, setContador] = useState(0); 
  return (
     <div>
        <h2>Mi contador</h2>

        <button onClick={
            () => {setContador(contador + 1)}
        }>++</button>
        <br/>
        <br/>
        <button onClick={
            () => {setContador(contador - 1)}
        }>--</button>

        <br/>
        <br/>


        <p>{contador}</p>


     </div>
  )
  
}

export default Contador;
