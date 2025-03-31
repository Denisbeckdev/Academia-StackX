import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-text">
          <h2>A StackX</h2>
          <p>
            Cada movimento executado em nossos espaços é um passo rumo à melhor versão de você mesmo.
            Acreditamos que a disciplina dos treinos constrói não apenas corpos mais fortes, mas vidas mais equilibradas e saudáveis.
            <br />
            Nosso combustível diário? Ver alunos superando limites, batendo metas e escrevendo suas próprias histórias de superação.
            Juntos, formamos uma comunidade onde o progresso de um inspira o crescimento de todos.
          </p>
        </div>

        <div className="carousel-container">
          <div className="carousel">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagem ${index + 1}`}
                className={index === currentIndex ? 'active' : ''}
              />
            ))}
          </div>
          <button className="carousel-prev" onClick={prevSlide}>❮</button>
          <button className="carousel-next" onClick={nextSlide}>❯</button>
        </div>
      </div>
    </section>
  );
}

export default About;