import React from 'react';
import styles from './styles.module.css';
import About1 from '../../assets/about1.png';
import Image from 'next/image';
 
const About: React.FC = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_content}>
        <div className={styles.about_text_section}>
          <h1>Sobre a AL SKIN</h1>
          
          <div className={styles.about_section}>
            <h2>QUEM SOMOS</h2>
            <p>
              Quem somos se refere a uma seção em um site ou documento que
              apresenta a identidade e a história de uma empresa, organização ou
              indivíduo. É um espaço onde se descreve a missão, visão, valores e
              propósitos, além de detalhes sobre o que a entidade faz e como o
              faz.
            </p>
          </div>
 
          <div className={styles.about_section}>
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
 
          <div className={styles.about_section}>
            <h2>O QUE A GENTE FAZ?</h2>
            <p>O que dá, quando dá.</p>
          </div>
        </div>
 
        <div className={styles.about_images_section}>
          <div className={styles.product_image_container}>
            <Image
              src={About1}
              alt="Produto AL SKIN sendo aplicado"
              className={styles.product_image}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
 
      <div className={styles.contact_section}>
        <h2>VAMOS CONVERSAR?</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        
        <button className={styles.contact_button}>
          <span className={styles.contact_icon}>💬</span>
          <span>Fale conosco</span>
        </button>
      </div>
    </div>
  );
};
 
export default About;