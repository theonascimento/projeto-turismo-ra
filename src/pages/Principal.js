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
                                src="/images/imagem01.jpg"
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
                                src="/images/imagem01.jpg"
                                alt="Eventos Culturais"
                            />
                            <Carousel.Caption>
                                <h3>Eventos Culturais</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/realidade">
                            <img
                                className="d-block w-100 carousel-image"
                                src="/images/imagem01.jpg"
                                alt="Realidade Aumentada"
                            />
                            <Carousel.Caption>
                                <h3>Realidade Aumentada</h3>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="descricao-site">
                <p>
                    O site é voltado para reunir informações turísticas das cidades, como pontos turísticos, hotéis, pousadas, restaurantes, rotas e também eventos culturais. Além disso, conta com um chatbot para servir de guia para sanar alguma dúvida sobre o que se pode encontrar na cidade que está presente. O site ainda oferece auxílio com realidade aumentada para obter informações de lugares que possui marcações que você visita utilizando a câmera do telefone.
                </p>
            </div>
        </div>
    );
};

export default Principal;
