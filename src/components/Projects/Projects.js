import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eufacoPreview from '../../Assets/Projects/eu-faco-preview.png'
import mariAdvoPreview from '../../Assets/Projects/mari-advo-preview.png'
import elo23Preview from '../../Assets/Projects/elo-23-preview.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">recentes </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eufacoPreview}
              isBlog={false}
              title="Eu Faço"
              description="A Eu Faço é uma empresa de prestadores de serviços de São Paulo, o diferencial desta página é o formulário, que entrega a melhor experiência de usuário, pois em cada passo, ele se adapta na melhor maneira para que o usuário não se sinta perdido. Eu o convido para testar no celular."
              demoLink="https://eu-faco.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mariAdvoPreview}
              isBlog={false}
              title="Mariane Advocacia"
              description="A Mariane Advocacia é um site pessoal da advogada Mariane de Itajaí SC, o site foi feito com a tecnologia NextJS, o diferencial do site é que os artigos são gerado através do Notion pessoal da Mariane."
              demoLink="https://www.marianeadvocacia.com.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elo23Preview}
              isBlog={false}
              title="Elo23"
              description="A Elo23 é uma empresa de marketing digital de São Paulo, a qual eu tive o privilégio de agradar o cliente com o layout moderno e fácil de mexer."
              demoLink="https://elo23digital.com.br/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
