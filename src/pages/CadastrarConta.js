import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrar } from "../services/authServices";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";

const CadastrarConta = () => {
    const [inputs, setInputs] = useState({ nome: "", usuario: "", senha: "", repetirSenha: "" });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Função de validação simples
    const validate = () => {
        let errors = {};
        if (!inputs.nome) errors.nome = "Nome é obrigatório.";
        if (!inputs.usuario) errors.usuario = "Usuário é obrigatório.";
        if (!inputs.senha) errors.senha = "Senha é obrigatória.";
        if (inputs.senha !== inputs.repetirSenha) errors.repetirSenha = "As senhas não coincidem.";
        return errors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await cadastrar(inputs.nome, inputs.usuario, inputs.senha);
                console.log(response); // Sucesso no cadastro
                navigate("/login"); // Redireciona para o login após sucesso
            } catch (error) {
                setErrors({ general: "Erro ao cadastrar, tente novamente." });
            }
        }
    };

    const handleBack = () => {
        navigate("/login"); // Redireciona para a tela de login
    };

    return (
        <div className="container my-5" style={{ minWidth: "480px" }}>
            <div className="col-6 col-md-4 col-xl-3 mx-auto">
                <p className="text-center" style={{ fontSize: "150px" }}>
                    🌍
                </p>
                <h1 className="text-center display-3">Turismo</h1>
                <hr />
                <div className="d-flex justify-content-center align-items-center">
                    <h2>Criar Conta</h2>
                </div>

                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div>
                        <FormInput
                            type="text"
                            field="nome"
                            placeholder="Nome Completo"
                            label="Nome"
                            onChange={handleChange}
                            value={inputs.nome}
                            error={errors.nome}
                        />
                    </div>
                    <div>
                        <FormInput
                            type="text"
                            field="usuario"
                            placeholder="Usuário"
                            label="Usuário"
                            onChange={handleChange}
                            value={inputs.usuario}
                            error={errors.usuario}
                        />
                    </div>
                    <div>
                        <FormInput
                            type="password"
                            field="senha"
                            placeholder="Senha"
                            label="Senha"
                            onChange={handleChange}
                            value={inputs.senha}
                            error={errors.senha}
                        />
                    </div>
                    <div>
                        <FormInput
                            type="password"
                            field="repetirSenha"
                            placeholder="Repita a senha"
                            label="Repetir Senha"
                            onChange={handleChange}
                            value={inputs.repetirSenha}
                            error={errors.repetirSenha}
                        />
                    </div>

                    {errors.general && <div className="alert alert-danger">{errors.general}</div>}

                    <div className="mt-3">
                        <button type="submit" className="btn btn-dark btn-lg w-100">
                            Criar Conta
                        </button>
                    </div>
                </form>

                {/* Botão Voltar */}
                <div className="mt-3">
                    <button type="button" className="btn btn-dark btn-lg w-100" onClick={handleBack}>
                        Voltar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CadastrarConta;
