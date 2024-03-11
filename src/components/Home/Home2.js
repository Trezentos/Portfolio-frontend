import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eu.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FAGUNDES_TEL, WHATS_MSG } from "../../consts";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SOBRE A MINHA <span className="purple"> TRAJETÓRIA</span>
            </h1>
            <p className="home-about-body">
              Sou programador há mais de 5 anos, trabalhei no mercado por 2 anos e hoje eu atuo como freelancer, entregando aplicativos e sites frontends para a internet!
              
              <br />
              <br />
                Eu tenho trabalhado em projetos grandes como Beto Carrero, Unimed Blumenau, Brastemp e Oceanic Aquarium (BC) e meu propósito aqui e entregar a melhor construção de websites que satisfaçam os meus clientes.
              <br />
              <br />

                E nessa jornada eu tenho desenvolvido com as ferramentas mais modernas do JavaScript, como <b className="purple">ReactJS, NextJs, NodeJs </b> e muitas outras tecnologias.
              <br />
              
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Minhas redes sociais!</h1>
            <p>
              Sinta-se a vontade para <span className="purple">visitar </span> os meus perfis.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={`https://wa.me/55${FAGUNDES_TEL}?text=${WHATS_MSG}`}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Trezentos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gustavo-fagundes-559b502b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gustavofgds"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
