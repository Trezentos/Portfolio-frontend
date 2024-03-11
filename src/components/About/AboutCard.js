import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Como mencionado, meu nome é <span className="purple">Gustavo Fagundes </span>
            e moro em <span className="purple"> Itajaí SC.</span>
            <br />
            Fui desenvolvedor pleno por dois anos na empresa GrupoW e hoje estou atuando como freelancer. Convido você para dar uma olhada em alguns dos meus projetos realizados por mim na aba Projetos.
            <br /> 
            <br /> 
            Na minha carreira, eu entreguei e dei manutenção em diversos sites de diversas áreas, estou sempre 
            me atualizando sobre as novas tecnologias do mercado e aprendendo algo novo a cada dia que passa para que eu possa fazer o melhor website para os 
            meus clientes.
            <br />
            
           
            <br />
            Além de criar códigos, eu curto demais
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar palavras cruzadas
            </li>
            <li className="about-activity">
              <ImPointRight /> Tomar café preto forte sem açúcar
            </li>
            <li className="about-activity">
              <ImPointRight /> Cozinhar risoto
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A verdadeira felicidade é desfrutar o presente, sem ansiedade dependente do futuro."{" "}
          </p>
          <footer className="blockquote-footer">Sêneca</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
