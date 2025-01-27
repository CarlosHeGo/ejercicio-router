import React from 'react';
import MiTrabajo from './MiTrabajo';
import Tips from './Tips';
import Bio from './Bio';

function About() {
  return (
    <div>
      <h3>Acerca de mi</h3>
      <ul>
        <li>
          <Bio></Bio>
        </li>
        <li>
          <MiTrabajo></MiTrabajo>
        </li>
        <ul>
          <Tips></Tips>
        </ul>
      </ul>
    </div>
  );
}

export default About;
