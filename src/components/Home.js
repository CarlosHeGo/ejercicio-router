import React from 'react';
import Formulario from './Formulario';
import Perfil from './Perfil';

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Formulario></Formulario>
        </li>
        <li>
          <Perfil></Perfil>
        </li>
      </ul>
    </div>
  );
}

export default Home;
