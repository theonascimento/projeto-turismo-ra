import React, { useEffect } from 'react';
import '../css/RealidadeAumentada.css';

const RealidadeAumentada = () => {
    useEffect(() => {
        // Carregar locais ao carregar o componente
        const carregarLocais = async () => {
            try {
                const response = await fetch('/locais.json'); // O arquivo 'locais.json' na pasta public
                const locaisCadastrados = await response.json();
                initMap(locaisCadastrados); // Inicializa o mapa com os locais carregados
            } catch (error) {
                console.error('Erro ao carregar os locais cadastrados:', error);
            }
        };

        // Função que inicializa o mapa
        const initMap = (locaisCadastrados) => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: -20.945755, lng: -41.345579 }, // Coordenadas iniciais de centralização
            });

            // Obter localização atual do usuário
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = { 
                    lat: position.coords.latitude, 
                    lng: position.coords.longitude 
                };
                map.setCenter(userLocation);

                new window.google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Você está aqui',
                });

                verificarProximidade(userLocation, map, locaisCadastrados);
            }, showError);
        };

        // Função para verificar proximidade e adicionar marcadores
        const verificarProximidade = (userLocation, map, locaisCadastrados) => {
            locaisCadastrados.forEach((local) => {
                const localPosicao = { lat: local.latitude, lng: local.longitude };
                const distancia = calcularDistancia(userLocation, localPosicao);

                if (distancia < 0.1) { // 100 metros
                    const marker = new window.google.maps.Marker({
                        position: localPosicao,
                        map: map,
                        title: local.nome,
                        icon: {
                            url: 'https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
                            scaledSize: new window.google.maps.Size(45, 45),
                        }
                    });

                    marker.addListener('click', () => {
                        alert(`Você clicou em: ${local.nome}`);
                    });
                }
            });
        };

        // Função para calcular distância
        const calcularDistancia = (loc1, loc2) => {
            const R = 6371;
            const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
            const dLon = (loc2.lng - loc1.lng) * (Math.PI / 180);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(loc1.lat * (Math.PI / 180)) * Math.cos(loc2.lat * (Math.PI / 180)) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        // Função para exibir erros de geolocalização
        const showError = (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert('Permissão de localização negada.');
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('Localização indisponível.');
                    break;
                case error.TIMEOUT:
                    alert('O pedido para obter a localização demorou muito.');
                    break;
                default:
                    alert('Erro desconhecido.');
                    break;
            }
        };

        // Carrega os locais e inicializa o mapa ao montar o componente
        carregarLocais();
    }, []);

    return (
        <div className="realidade-aumentada-container">
            <h1>Realidade Aumentada</h1>
            <hr />
            <div id="map" style={{ height: '400px', width: '100%' }}></div> {/* Mapa centralizado */}
        </div>
    );
};

export default RealidadeAumentada;
