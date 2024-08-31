import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <span className="fs-3 rounded me-2">🌍</span>
                        <span className="fs-3">Turismo</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">
                                Início
                            </NavLink>
                            <NavLink to="/pontos" className="nav-link">
                                Pontos Turísticos
                            </NavLink>
                            <NavLink to="/eventos" className="nav-link">
                                Eventos
                            </NavLink>
                            <NavLink to="/realidade" className="nav-link">
                                Experiência RA
                            </NavLink>
                            <li className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Cadastro
                                </NavLink>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <NavLink to="/cadastro-ponto" className="dropdown-item">
                                            Cadastrar Ponto
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/cadastro-evento" className="dropdown-item">
                                            Cadastrar Evento
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <Link to="/logout" className="nav-link">
                                Sair
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
