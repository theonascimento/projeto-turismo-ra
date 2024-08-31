import React from 'react';
import '../css/RealidadeAumentada.css'; // Adicione o caminho para seu arquivo CSS

const RealidadeAumentada = () => {
    return (
        <div className="realidade-aumentada-container">
            <h1>Realidade Aumentada</h1>
            <hr />
            <img
                src="/images/imagem01.jpg"
                alt="Realidade Aumentada"
                className="imagem-realidade"
            />
            <p>
                Para utilizar a realidade aumentada, você precisa dar permissão para acessar a câmera do seu telefone. 
                Apontando a câmera para as marcações encontradas nos locais que você visitar, você poderá obter 
                informações adicionais sobre esses lugares.
            </p>
            <hr />
            <a href="/app-realidade-aumentada" className="botao-acessar-camera">Acessar a câmera</a>
        </div>
    );
};

export default RealidadeAumentada;
