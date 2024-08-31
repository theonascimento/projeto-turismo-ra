import React, { useState } from 'react';
import '../css/PontosTuristicos.css';

const PontosTuristicos = () => {
    const [filtroSelecionado, setFiltroSelecionado] = useState('');
    const [cidadeFiltro, setCidadeFiltro] = useState('');
    const [cidadeFiltrada, setCidadeFiltrada] = useState('');
    const [sugestoes, setSugestoes] = useState([]);

    const cidades = [
        "Muqui - ES",
        "Cachoeiro de Itapemirim - ES",
        "Mimoso do Sul - ES"
    ];

    const locais = [
        {
            id: 1,
            nome: "Casarão Antigo",
            endereco: "Rua das Flores, 123",
            telefone: "(11) 98765-4321",
            descricao: "Antigo casarão histórico.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro1",
            cidade: "Muqui - ES"
        },
        {
            id: 2,
            nome: "Museu Histórico",
            endereco: "Av. Central, 456",
            telefone: "(11) 99876-5432",
            descricao: "Museu com artefatos históricos.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro1",
            cidade: "Cachoeiro de Itapemirim - ES"
        },
        {
            id: 3,
            nome: "Parque Ecológico",
            endereco: "Estrada da Natureza, 789",
            telefone: "(11) 91234-5678",
            descricao: "Parque com áreas de lazer.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro1",
            cidade: "Muqui - ES"
        },
        {
            id: 4,
            nome: "Casarão Antigo",
            endereco: "Rua das Flores, 123",
            telefone: "(11) 98765-4321",
            descricao: "Antigo casarão histórico.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro1",
            cidade: "Muqui - ES"
        },
        {
            id: 5,
            nome: "Casarão Antigo",
            endereco: "Rua das Flores, 123",
            telefone: "(11) 98765-4321",
            descricao: "Antigo casarão histórico.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro2",
            cidade: "Muqui - ES"
        },
        {
            id: 6,
            nome: "Casarão Antigo",
            endereco: "Rua das Flores, 123",
            telefone: "(11) 98765-4321",
            descricao: "Antigo casarão histórico.",
            imagem: "images/imagem01.jpg",
            categoria: "filtro2",
            cidade: "Muqui - ES"
        }
    ];

    const handleFiltroChange = (e) => {
        setFiltroSelecionado(e.target.value);
    };

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

    const locaisFiltrados = locais.filter((local) => {
        const cidadeMatch = cidadeFiltrada ? local.cidade === cidadeFiltrada : true;
        const categoriaMatch = !filtroSelecionado || filtroSelecionado === '' || local.categoria === filtroSelecionado;
        return cidadeMatch && categoriaMatch;
    });

    return (
        <>
            <div className="header-container">
                <h1 className="titulo-pontos">Pontos Turísticos</h1>
                <hr className="linha-separadora" />
                <div className="filtros-container">
                    <div className="filtro-cidade">
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
                            <ul className="sugestoes-lista">
                                {sugestoes.map((sugestao, index) => (
                                    <li key={index} onClick={() => handleSugestaoClick(sugestao)} className="sugestao-item">
                                        {sugestao}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="filtro-container">
                        <label htmlFor="filtro">Filtro:</label>
                        <select
                            id="filtro"
                            className="filtro-select"
                            value={filtroSelecionado}
                            onChange={handleFiltroChange}
                        >
                            <option value="">Selecione um filtro</option>
                            <option value="filtro1">Casarões</option>
                            <option value="filtro2">Hotéis</option>
                            <option value="filtro3">Pousadas</option>
                            <option value="filtro4">Restaurantes</option>
                            <option value="filtro5">Rotas</option>
                        </select>
                    </div>
                    
                </div>
                <button onClick={handleLimparFiltro} className="limpar-filtro-btn">Limpar Cidade</button>
                <hr className="linha-separadora" />
            </div>

            <div className="container mt-4">
                <div className="row">
                    {locaisFiltrados.map((local) => (
                        <div key={local.id} className="col-md-4 mb-4">
                            <div className="local-card">
                                <img src={local.imagem} alt={local.nome} className="local-imagem" />
                                <h3>{local.nome}</h3>
                                <p><strong>Endereço:</strong> {local.endereco}</p>
                                <p><strong>Telefone:</strong> {local.telefone}</p>
                                <p><strong>Descrição:</strong> {local.descricao}</p>
                                <button className="saiba-mais-btn">Saiba mais</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PontosTuristicos;
