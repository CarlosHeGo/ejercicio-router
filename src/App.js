import { BrowserRouter, Routes, Route } from 'react-router';
import  About  from './components/About';
import  Layout  from './Layout';
import Home from './components/Home';
import Formulario from './components/Formulario';
import Perfil from './components/Perfil';
import Bio from './components/Bio';
import MiTrabajo from './components/MiTrabajo';
import Tips from './components/Tips';
import Contacto from './components/Contacto';
import Llamame from './components/Llamame';
import Redes from './components/Redes';
import Mensaje from './components/Mensaje';
import Colaborar from './components/Colaborar';
import Clientes from './components/Clientes';
import Logros from './components/Logros';
import Casos from './components/Casos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/inicio/formulario" element={<Formulario />} />
          <Route path="/inicio/perfil" element={<Perfil />} />
          <Route path='/acercademi' element={<About />} />
          <Route path="/acercademi/bio" element={<Bio/>} />
          <Route path="/acercademi/mitrabajo" element={<MiTrabajo/>} />
          <Route path="/acercademi/tips" element={<Tips/>} />
          <Route path='/casosdeexito' element={<Casos />} />
          <Route path="/casosdeexito/clientes" element={<Clientes/>} />
          <Route path="/casosdeexito/logros" element={<Logros/>} />
          <Route path="/casosdeexito/comocolaborar" element={<Colaborar/>} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path="/contacto/redessociales" element={<Redes/>} />
          <Route path="/contacto/mensaje" element={<Mensaje/>} />
          <Route path="/contacto/llamame" element={<Llamame/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
