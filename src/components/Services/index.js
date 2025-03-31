import React from 'react';
import './index.css';
import funcional from '../assets/images/funcional.jpg';
import musculacao from '../assets/images/musculacao.jpg';
import personal from '../assets/images/personal.jpg';

function Services() {
    return (
        <section id="services" className="services">
            <h2>Nossos Serviços</h2>

            <div className="services-grid">
                <div className="card">
                    <img src={funcional} className="card-img-top" alt="Funcional" />
                    <div className="card-body">
                        <p className="card-text">Treinamentos desenvolvidos para melhorar sua performance e saúde.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={musculacao} className="card-img-top" alt="Musculação" />
                    <div className="card-body">
                        <p className="card-text">Rotinas de musculação para fortalecimento e ganho de massa muscular.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={personal} className="card-img-top" alt="Personal" />
                    <div className="card-body">
                        <p className="card-text">Acompanhamento com profissional para otimizar os seus treinos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
