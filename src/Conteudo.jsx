import React, { useState, useEffect } from 'react';
import atacadao from "./assets/atacadao.jpg";

function Conteudo() {
  const [dias, setDias] = useState(10);
  const [telaFinal, setTelaFinal] = useState(false);

  useEffect(() => {
    if (dias === 0) {
      setTelaFinal(true);
    }
  }, [dias]);

  const diminuirDias = () => {
    if (dias > 0) {
      setDias(prev => prev - 1);
    }
  };

  const classeCabecalho = telaFinal ? 'header finished' : 'header';

  return (
    <div className="container">
      <div className="card">
        <div className={classeCabecalho}>
          <h1>Contagem Regressiva</h1>
        </div>

        <div className="content">
          {!telaFinal ? (
            <>
              <span className="counter-value">{dias}</span>
              <span className="counter-label">Dias para a Formatura</span>

              <button className="btn-decrement" onClick={diminuirDias}>
                (-) 1 dia
              </button>
            </>
          ) : (
            <div className="finish-area">
              <div className="message-box">
                🎓 Parabéns! Chegou o grande dia da formatura! <br />
                <strong>Partiu atacadao FC KKKKJ</strong>
              </div>

              <img
                src={atacadao}
                alt="Resultado da Formatura"
                className="formatura-image"
                onError={() => console.error('Erro ao carregar a imagem. Verifique o caminho em src/assets/')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Conteudo;
