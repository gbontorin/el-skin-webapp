import React from 'react';
import './About.css';
import About1 from '../../assets/about1.png';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-section">
          <h1>Sobre a AL SKIN</h1>

          <div className="about-section">
            <h2>QUEM SOMOS</h2>
            <p>
              Quem somos se refere a uma seção em um site ou documento que
              apresenta a identidade e a história de uma empresa, organização ou
              indivíduo. É um espaço onde se descreve a missão, visão, valores e
              propósitos, além de detalhes sobre o que a entidade faz e como o
              faz.
            </p>
          </div>

          <div className="about-section">
            <h2>POR QUE EXISTIMOS?</h2>
            <p>
              A questão de por que existimos é uma das perguntas mais
              fundamentais e complexas da filosofia e da existência humana. Não
              há uma única resposta definitiva, pois diferentes perspectivas e
              crenças oferecem interpretações diversas. Algumas abordagens
              sugerem que nossa existência tem um propósito definido, enquanto
              outras veem a existência como um fenômeno sem um propósito
              intrínseco.
            </p>
          </div>

          <div className="about-section">
            <h2>O QUE A GENTE FAZ?</h2>
            <p>O que dá, quando dá.</p>
          </div>
        </div>

        <div className="about-images-section">
          <div className="product-image-container">
            <img
              src={About1}
              alt="Produto AL SKIN sendo aplicado"
              className="product-image"
            />
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>VAMOS CONVERSAR?</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

        <button className="contact-button">
          <span className="contact-icon">💬</span>
          <span>Fale conosco</span>
        </button>
      </div>
    </div>
  );
};

export default About;
