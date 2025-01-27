import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./Layout.css";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/acercademi">Acerca de mi</a>
          </li>
          <li>
            <a href="/casosdeexito ">Casos de éxito</a>
          </li>
          <li>
            <a href="/Contacto ">Contacto</a>
          </li>
        </ul>
      </header>

      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Página principal</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>

      <footer>{/* Información de contacto y enlaces */}</footer>
    </div>
  );
};
export default Layout;
