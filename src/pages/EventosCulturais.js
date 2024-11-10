import React, { useState } from 'react';
import '../css/EventosCulturais.css';

const EventosCulturais = () => {
    const [cidadeFiltro, setCidadeFiltro] = useState('');
    const [cidadeFiltrada, setCidadeFiltrada] = useState('');
    const [sugestoes, setSugestoes] = useState([]);

    const cidades = [
        "Muqui - ES",
        "Cachoeiro de Itapemirim - ES",
        "Mimoso do Sul - ES"
    ];

    const eventos = [
        {
            id: 1,
            cidade: "Muqui - ES",
            imagem: "images/carnaval03.png",
            nome: "Carnaval",
            data: "13 a 15 de fevereiro de 2024",
            descricao: "O Festival Muquiense do Boi Pintadinho, um dos mais folclóricos do Espírito Santo, começa nesta sexta-feira (13), em Muqui. Este ano, 19 grupos - todos do município - vão participar da festa.Os integrantes do Boi Xodó, que vão desfilar na madrugada de sábado (14), aguardam ansiosos o início da festa. “Estamos finalizando os preparativos. Esse ano, investimos em uma bateria diferenciada”, declara o presidente do grupo. Ele explica que a turma é composta por 70 integrantes e participa do evento há 25 anos."
        },
        {
            id: 2,
            cidade: "Muqui - ES",
            imagem: "images/foliadereis.png",
            nome: "Folia de Reis",
            data: "13 a 15 de fevereiro de 2024",
            descricao: "A principal característica das Folias são as figuras dos Palhaços, com grotescas máscaras, saracoteando à frente dos foliões e, segundo o povo, são os espiões de Herodes"
        },
        {
            id: 3,
            cidade: "Cachoeiro de Itapemirim - ES",
            imagem: "images/carnaval02.png",
            nome: "Carnaval",
            data: "13 a 15 de fevereiro de 2024",
            descricao: "O Carnaval de Cachoeiro de Itapemirim, no Espírito Santo, é uma festa que se tornou popular e animada ao longo do tempo, com a ajuda de marchinhas carnavalescas."
        }
        
    ];

    const handleCidadeFiltroChange = (e) => {
        const valor = e.target.value;
        setCidadeFiltro(valor);

        if (valor) {
            const sugestoesFiltradas = cidades.filter(cidade =>
                cidade.toLowerCase().includes(valor.toLowerCase())
            );
            setSugestoes(sugestoesFiltradas);
        } else {
            setSugestoes([]);
        }
    };

    const handleSugestaoClick = (sugestao) => {
        setCidadeFiltro(sugestao);
        setSugestoes([]);
    };

    const handleAplicarFiltro = () => {
        setCidadeFiltrada(cidadeFiltro);
    };

    const handleLimparFiltro = () => {
        setCidadeFiltro('');
        setCidadeFiltrada('');
        setSugestoes([]);
    };

    const eventosFiltrados = eventos.filter(evento =>
        !cidadeFiltrada || evento.cidade === cidadeFiltrada
    );

    return (
        <div className="eventos-container">
            <h1 className="titulo-eventos">Eventos Culturais</h1>
            <hr className="linha-separadora" />
            <div className="filtro-cidade2">
                <label htmlFor="cidadeFiltro" className="cidade-label">Cidade:</label>
                <input
                    type="text"
                    id="cidadeFiltro"
                    value={cidadeFiltro}
                    onChange={handleCidadeFiltroChange}
                    placeholder="Digite a cidade..."
                    className="cidade-input"
                />
                <button onClick={handleAplicarFiltro} className="aplicar-filtro-btn">Aplicar</button>
                {sugestoes.length > 0 && (
                    <ul className="sugestoes-lista2">
                        {sugestoes.map((sugestao, index) => (
                            <li key={index} onClick={() => handleSugestaoClick(sugestao)} className="sugestao-item2">
                                {sugestao}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button onClick={handleLimparFiltro} className="limpar-filtro-btn">Limpar Cidade</button>
            <hr className="linha-separadora" />
            {eventosFiltrados.map(evento => (
                <div key={evento.id} className="evento-card">
                    <img src={evento.imagem} alt={`Evento ${evento.id}`} className="evento-imagem" />
                    <div className="evento-descricao">
                        <h3>{evento.nome}</h3>
                        <p><strong>Data:</strong> {evento.data}</p>
                        <p>{evento.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventosCulturais;
