import React, { useState } from "react";
import './index.css';
import FuncionalImg from '../assets/images/treino-funcional.jpg'
import MusculacaoImg from '../assets/images/treino-musculacao.jpg'
import PersonalImg from '../assets/images/treino-personal.jpg'

function Programs() {
    const [selectedPlan, setSelectedPlan] = useState('mensal');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const programs = [
        {
            id: 1,
            title: "Funcional",
            description: "Treinos dinâmicos para melhorar força, resistência e mobilidade.",
            img: FuncionalImg
        },
        {
            id: 2,
            title: "Musculação",
            description: "Exercícios com pesos para hipertrofia e definição muscular.",
            img: MusculacaoImg
        },
        {
            id: 3,
            title: "Personal",
            description: "Treino personalizado com acompanhamento individual.",
            img: PersonalImg
        }
    ];

    const planPrices = {
        mensal: 59.90,
        semestral: 299.90,
        anual: 499.90
    };

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const handleEnrollClick = (program) => {
        setSelectedProgram(program);
        setShowPopup(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cadastro para ${selectedProgram.title} (${selectedPlan}) enviado!`);
        setShowPopup(false);
    };

    return (
        <section id="programs" className="programs-section">
            <div className="programs-container">
                <h2>Programas</h2>

                <div className="plan-selector">
                    {['mensal', 'semestral', 'anual'].map((plan) => (
                        <button
                            key={plan}
                            className={`plan-button ${selectedPlan === plan ? 'active' : ''}`}
                            onClick={() => setSelectedPlan(plan)}
                        >
                            {plan.charAt(0).toUpperCase() + plan.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="cards-container">
                    {programs.map((program) => (
                        <div className="program-card" key={program.id}>
                            <img src={program.img} alt={program.title} className="card-image" />
                            <div className="card-content">
                                <h3>{program.title}</h3>
                                <p className="card-description">{program.description}</p>
                                <p className="card-price">
                                    {formatPrice(planPrices[selectedPlan])}
                                    <span>/{selectedPlan}</span>
                                </p>
                                <button
                                    className="enroll-button"
                                    onClick={() => handleEnrollClick(program)}
                                >
                                    Matricule-se!
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <button
                                className="close-btn"
                                onClick={() => setShowPopup(false)}
                                aria-label="Fechar"
                            >
                                ✖
                            </button>
                            <h3>Cadastro para {selectedProgram?.title}</h3>
                            <p className="selected-plan">Plano: {selectedPlan}</p>
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Nome completo" required />
                                <input type="number" placeholder="Idade" min="15" required />
                                <input type="date" placeholder="Data de nascimento" required />
                                <input
                                    type="text"
                                    placeholder="CPF"
                                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                                    title="Formato: 000.000.000-00"
                                    required
                                />
                                <input type="email" placeholder="E-mail" required />
                                <input
                                    type="tel"
                                    placeholder="Telefone"
                                    pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                                    title="Formato: (00) 00000-0000"
                                    required
                                />

                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name="gender" value="male" required /> Masculino
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="female" required /> Feminino
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="other" required /> Outro
                                    </label>
                                </div>

                                <input type="hidden" name="program" value={selectedProgram?.title} />
                                <input type="hidden" name="plan" value={selectedPlan} />

                                <button type="submit" className="submit-btn">
                                    Confirmar Matrícula
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Programs;