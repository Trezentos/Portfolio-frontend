import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Contate comigo e venha conhecer o meu trabalho!",
          "Há mais de 5 anos construindo soluções para a internet.",
          "Desenvolvo com as tecnologias mais avançadas do mercado.",
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 200,
        
        delay: 30,
      }}
    />
  );
}

export default Type;
