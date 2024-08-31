import React, { useState } from 'react';
import '../css/CadastroPonto.css';

const CadastroPonto = () => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone1, setTelefone1] = useState('');
    const [telefone2, setTelefone2] = useState('');
    const [descricao, setDescricao] = useState('');
    const [acessibilidade, setAcessibilidade] = useState([]);
    const [imagens, setImagens] = useState([]);
    const [links, setLinks] = useState([{ titulo: '', url: '' }]);

    const handleAcessibilidadeChange = (event) => {
        const { value, checked } = event.target;
        setAcessibilidade(prevState =>
            checked ? [...prevState, value] : prevState.filter(item => item !== value)
        );
    };

    const handleLinkChange = (index, event) => {
        const newLinks = [...links];
        newLinks[index][event.target.name] = event.target.value;
        setLinks(newLinks);
    };

    const addLink = () => {
        setLinks([...links, { titulo: '', url: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário
        console.log({
            nome,
            categoria,
            endereco,
            telefone1,
            telefone2,
            descricao,
            acessibilidade,
            imagens,
            links
        });
    };

    return (
        <div className="cadastro-ponto-container">
            <h1>Cadastrar Ponto Turístico</h1>
            <form className="cadastro-ponto" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="nome">Nome: <span className="obrigatorio">(obrigatório)</span></label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria/Tipo: <span className="obrigatorio">(obrigatório)</span></label>
                        <select
                            id="categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="Casarão">Casarão</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Pousada">Pousada</option>
                            <option value="Restaurante">Restaurante</option>
                            <option value="Rota">Rota</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço: <span className="obrigatorio">(obrigatório)</span></label>
                        <input
                            type="text"
                            id="endereco"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone1">Telefone 1: <span className="obrigatorio">(obrigatório)</span></label>
                        <input
                            type="tel"
                            id="telefone1"
                            value={telefone1}
                            onChange={(e) => setTelefone1(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone2">Telefone 2: <span className="opcional">(opcional)</span></label>
                        <input
                            type="tel"
                            id="telefone2"
                            value={telefone2}
                            onChange={(e) => setTelefone2(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição: <span className="obrigatorio">(obrigatório)</span></label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrições e/ou informações sobre a importância cultural e histórica do ponto turístico, informações sobre o lugar, serviços como estacionamento, quarto, guias turísticos, lojas de souvenirs, alimentação, lazer, etc."
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Breve histórico ou informações sobre a importância cultural e histórica do ponto turístico, informações sobre serviços como estacionamento, guias turísticos, lojas de souvenirs, restaurantes, etc.'}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Cidade: <span className="obrigatorio">(obrigatório)</span></label>
                    <select
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Cachoeiro de Itapemirim - ES">Cachoeiro de Itapemirim - ES</option>
                        <option value="Muqui - ES">Muqui - ES</option>
                        <option value="Mimoso do Sul - ES">Mimoso do Sul - ES</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Acessibilidade:</label>
                    <div className="checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                value="Rampas para cadeiras de rodas"
                                onChange={handleAcessibilidadeChange}
                            /> Rampas para cadeiras de rodas
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Banheiros acessíveis"
                                onChange={handleAcessibilidadeChange}
                            /> Banheiros acessíveis
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="Estacionamento acessível"
                                onChange={handleAcessibilidadeChange}
                            /> Estacionamento acessível
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="imagens">Imagens: <span className="obrigatorio">(obrigatório)</span></label>
                    <input
                        type="file"
                        id="imagens"
                        multiple
                        onChange={(e) => setImagens(e.target.files)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Adicionar link externo:</label>
                    {links.map((link, index) => (
                        <div className="form-row" key={index}>
                            <div className="form-group">
                                <label htmlFor={`tituloLink${index}`}>Título: <span className="opcional">(opcional)</span></label>
                                <input
                                    type="text"
                                    id={`tituloLink${index}`}
                                    name="titulo"
                                    value={link.titulo}
                                    onChange={(e) => handleLinkChange(index, e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`urlLink${index}`}>URL: <span className="opcional">(opcional)</span></label>
                                <input
                                    type="url"
                                    id={`urlLink${index}`}
                                    name="url"
                                    value={link.url}
                                    onChange={(e) => handleLinkChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                    {links.length < 3 && (
                        <button type="button" onClick={addLink}>Adicionar mais um link</button>
                    )}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPonto;
