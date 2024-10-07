import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leiaute from "./pages/Leiaute";
import Principal from "./pages/Principal";
import PontosTuristicos from "./pages/PontosTuristicos";
import EventosCulturais from "./pages/EventosCulturais";
import CadastroPonto from "./pages/CadastroPonto";
import CadastroEvento from "./pages/CadastroEvento";
import RealidadeAumentada from "./pages/RealidadeAumentada";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Leiaute />}>
                    <Route index element={<Principal />} />
                    <Route path="pontos" element={<PontosTuristicos />} />
                    <Route path="eventos" element={<EventosCulturais />} />
                    <Route path="cadastro-ponto" element={<CadastroPonto />} />
                    <Route path="cadastro-evento" element={<CadastroEvento />} />
                    <Route path="interatividade" element={<RealidadeAumentada />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
