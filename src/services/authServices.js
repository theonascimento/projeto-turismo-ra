import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

export const login = async (usuario, senha, lembrar) => {
    let logado = false;
    await axios
        .post(API_URL + "login", { usuario, senha, lembrar })
        .then((response) => {
            if (response.status === 200) {
                if (response.data.accessToken) {
                    const jsonString = JSON.stringify(response.data);
                    localStorage.setItem("user", jsonString);
                    logado = true;
                }
            } else {
                console.log("LOGIN_ERROR: " + response);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    return logado;
};

export const cadastrar = async (nome, usuario, senha) => {
    try {
        const response = await axios.post(API_URL + "cadastrar", {
            nome,
            usuario,
            senha
        });
        return response.data; // Retorna a resposta da API (sucesso ou erro)
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        throw error; // Lança erro caso ocorra
    }
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.accessToken ? true : false;
};

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user && user.accessToken ? { "x-access-token": user.accessToken } : {};
};
