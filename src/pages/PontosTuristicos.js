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
            nome: "Casarão 01",
            endereco: "Rua das Flores, 123",
            telefone: "(99) 99999-9999",
            descricao: "Antigo casarão histórico.",
            imagem: "images/casarao01.png",
            categoria: "filtro1",
            cidade: "Muqui - ES"
        },
        {
            id: 2,
            nome: "Casarão 02",
            endereco: "Av. Central, 456",
            telefone: "(11) 99999-8888",
            descricao: "Antigo casarão histórico.",
            imagem: "images/casarao02.png",
            categoria: "filtro1",
            cidade: "Muqui - ES"
        },
        {
            id: 3,
            nome: "Casarão 03",
            endereco: "Estrada da Natureza, 789",
            telefone: "(11) 99999-7777",
            descricao: "Antigo casarão histórico.",
            imagem: "images/casarao03.png",
            categoria: "filtro1",
            cidade: "Cachoeiro de Itapemirim - ES"
        },
        {
            id: 4,
            nome: "Casarão 04",
            endereco: "Rua das Margaridas, 12",
            telefone: "(11) 99999-6666",
            descricao: "Antigo casarão histórico.",
            imagem: "images/casarao04.png",
            categoria: "filtro1",
            cidade: "Mimoso do Sul - ES"
        },
        {
            id: 5,
            nome: "Hotel 01",
            endereco: "Rua das Nevez, 13",
            telefone: "(11) 91111-1111",
            descricao: "Serviço de hotelaria.",
            imagem: "images/hotel01.png",
            categoria: "filtro2",
            cidade: "Muqui - ES"
        },
        {
            id: 6,
            nome: "Hotel 02",
            endereco: "Rua das Pedras, 114",
            telefone: "(11) 92222-2222",
            descricao: "Serviço de hotelaria.",
            imagem: "images/hotel02.png",
            categoria: "filtro2",
            cidade: "Cachoeiro de Itapemirim - ES"
        },
        {
            id: 7,
            nome: "Hospedagem 01",
            endereco: "Rua das Rochas, 173",
            telefone: "(11) 93333-3333",
            descricao: "Serviço de hospedagem.",
            imagem: "images/hospedagem01.png",
            categoria: "filtro3",
            cidade: "Muqui - ES"
        },
        {
            id: 8,
            nome: "Hospedagem 02",
            endereco: "Rua das Letras, 33",
            telefone: "(11) 95555-5555",
            descricao: "Serviço de hospedagem.",
            imagem: "images/hospedagem02.png",
            categoria: "filtro3",
            cidade: "Muqui - ES"
        },
        {
            id: 9,
            nome: "Restaurante 01",
            endereco: "Rua das Chuvas, 83",
            telefone: "(11) 92222-4444",
            descricao: "Serviço Alimentício.",
            imagem: "images/restaurante01.png",
            categoria: "filtro4",
            cidade: "Muqui - ES"
        },
        {
            id: 10,
            nome: "Lanchonete 01",
            endereco: "Rua das Freiras, 88",
            telefone: "(11) 95555-4444",
            descricao: "Serviço Alimentício.",
            imagem: "images/lanchonete01.png",
            categoria: "filtro4",
            cidade: "Muqui - ES"
        },
        {
            id: 11,
            nome: "Lanchonete 02",
            endereco: "Rua das Madres, 878",
            telefone: "(11) 92222-7777",
            descricao: "Serviço Alimentício.",
            imagem: "images/lanchonete02.png",
            categoria: "filtro4",
            cidade: "Mimoso do Sul - ES"
        },
        {
            id: 12,
            nome: "Rota 01",
            endereco: "Rota do Café",
            telefone: "(11) 96666-7777",
            descricao: "Rotas para se aventurar.",
            imagem: "images/rotas01.png",
            categoria: "filtro5",
            cidade: "Muqui - ES"
        },
        {
            id: 13,
            nome: "Rota 02",
            endereco: "Rota do Dragão",
            telefone: "(11) 93333-8888",
            descricao: "Rotas para se aventurar.",
            imagem: "images/rotas02.png",
            categoria: "filtro5",
            cidade: "Muqui - ES"
        },
        {
            id: 14,
            nome: "Rota 03",
            endereco: "Rota do Vale",
            telefone: "(11) 99999-8888",
            descricao: "Rotas para se aventurar.",
            imagem: "images/rotas03.png",
            categoria: "filtro5",
            cidade: "Cachoeiro de Itapemirim - ES"
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
