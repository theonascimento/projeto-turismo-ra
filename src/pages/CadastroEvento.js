import React, { useState } from 'react';
import '../css/CadastroEvento.css'; // Crie um arquivo CSS separado para o cadastro de eventos

const CadastroEvento = () => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cidade, setCidade] = useState('');
    const [links, setLinks] = useState([{ titulo: '', url: '' }]);

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
            data,
            descricao,
            links
        });
    };

    return (
        <div className="cadastro-evento-container">
            <h1>Cadastrar Evento Cultural</h1>
            <form className="cadastro-evento" onSubmit={handleSubmit}>
                <div className="evento-form-row">
                    <div className="evento-form-group">
                        <label htmlFor="nomeEvento">Nome: <span className="evento-obrigatorio">(obrigatório)</span></label>
                        <input
                            type="text"
                            id="nomeEvento"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="evento-form-group">
                    <label htmlFor="dataEvento">Data: <span className="evento-obrigatorio">(obrigatório)</span></label>
                    <input
                        type="text"
                        id="dataEvento"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder="Descrição da data que ocorre o evento"
                        required
                    />
                </div>
                <div className="evento-form-group">
                    <label htmlFor="descricaoEvento">Descrição: <span className="evento-obrigatorio">(obrigatório)</span></label>
                    <textarea
                        id="descricaoEvento"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrição do evento cultural, festivais, eventos folclóricos, etc."
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Descreva o evento cultural, como festivais, eventos folclóricos, etc.'}
                        required
                    />
                </div>
                <div className="evento-form-group">
                    <label htmlFor="cidade">Cidade: <span className="evento-obrigatorio">(obrigatório)</span></label>
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
                <div className="evento-form-group">
                    <label>Adicionar link externo:</label>
                    {links.map((link, index) => (
                        <div className="evento-form-row" key={index}>
                            <div className="evento-form-group">
                                <label htmlFor={`tituloLink${index}`}>Título: <span className="evento-opcional">(opcional)</span></label>
                                <input
                                    type="text"
                                    id={`tituloLink${index}`}
                                    name="titulo"
                                    value={link.titulo}
                                    onChange={(e) => handleLinkChange(index, e)}
                                />
                            </div>
                            <div className="evento-form-group">
                                <label htmlFor={`urlLink${index}`}>URL: <span className="evento-opcional">(opcional)</span></label>
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
                <button type="submit">Cadastrar Evento</button>
            </form>
        </div>
    );
};

export default CadastroEvento;
