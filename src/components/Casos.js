import React from "react";
import Clientes from "./Clientes";
import Colaborar from "./Colaborar";
import Logros from "./Logros";

function Casos() {
  return (
    <div>
        <h5>Estás en la página de casos de éxito</h5>
      <ul>
        <li>
          <Clientes></Clientes>
        </li>
        <li>
          <Logros></Logros>
        </li>
        <li>
          <Colaborar></Colaborar>
        </li>
      </ul>
    </div>
  );
}

export default Casos;
