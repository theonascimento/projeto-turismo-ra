import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Principal.css'; // Adiciona o arquivo CSS personalizado

const Principal = () => {
    return (
        <div className="principal-container">
            <h1 className="titulo-principal">Bem Vindo ao Turismo</h1>
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <Link to="/pontos">
                            <img
                                className="d-block w-100 carousel-image"
                                src="/images/casarao01.png"
                                alt="Pontos Turísticos"
                            />
                            <Carousel.Caption>
                                <h3>Pontos Turísticos</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/eventos">
                            <img
                                className="d-block w-100 carousel-image"
                                src="/images/carnaval01.png"
                                alt="Eventos Culturais"
                            />
                            <Carousel.Caption>
                                <h3>Eventos Culturais</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/interatividade">
                            <img
                                className="d-block w-100 carousel-image"
                                src="/images/interatividade.png"
                                alt="Realidade Aumentada"
                            />
                            <Carousel.Caption>
                                <h3>Interatividade</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="descricao-site">
                <p>
                    O site é voltado para reunir informações turísticas das cidades, como pontos turísticos, hotéis, pousadas, restaurantes, rotas e eventos culturais. Além disso, conta com uma Interatividade utilizando as APIs do Google Cloud, permite que o usuário explore o mapa e obtenha informações detalhadas ao se aproximar e clicar nas marcações de pontos turísticos e eventos próximos à sua localização.
                </p>
            </div>
        </div>
    );
};

export default Principal;
