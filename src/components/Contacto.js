import React from 'react';
import Redes from './Redes';
import Mensaje from './Mensaje';
import Llamame from './Llamame';

function Contacto() {
  return (
    <div>
      <ul>
        <li>
          <Redes></Redes>
        </li>
        <li>
          <Mensaje></Mensaje>
        </li>
        <li>
          <Llamame></Llamame>
        </li>
      </ul>
    </div>
  );
}

export default Contacto;