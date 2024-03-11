import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaWhatsapp } from "react-icons/fa";
import { FAGUNDES_TEL, WHATS_MSG } from "../../consts";

function Home() {
  return (
    <section >
      <Container  fluid className="home-section " id="home">
        <Particle />
        <Container  className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Seja muito bem-vindo
              </h1>

              <h1 className="heading-name">
                Eu me chamo
                 Gustavo Fagundes e desenvolvo aplicativos e sites para a<strong className="main-name"> Internet.</strong>
              </h1>
              <div style={{ padding: 10, paddingLeft: 15, textAlign: "left", marginBottom: 75 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
     
      <Home2 />
    </section>
  );
}

export default Home;
