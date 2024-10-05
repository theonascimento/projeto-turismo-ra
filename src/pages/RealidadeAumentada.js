import React, { useEffect, useState } from 'react';
import '../css/RealidadeAumentada.css';

const RealidadeAumentada = () => {
    const [selectedLocal, setSelectedLocal] = useState(null); // Estado para controlar o local selecionado

    useEffect(() => {
        // Carrega o script do Google Maps API
        const loadGoogleMapsScript = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJ24Z0591gmYlaslFTh4KZnfGMoZPwS4&libraries=places`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
            script.onload = () => {
                carregarLocais();
            };
        };

        const carregarLocais = async () => {
            try {
                const response = await fetch('/locais.json');
                const locaisCadastrados = await response.json();
                initMap(locaisCadastrados);
            } catch (error) {
                console.error('Erro ao carregar os locais cadastrados:', error);
            }
        };

        const initMap = (locaisCadastrados) => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: -20.945755, lng: -41.345579 }, // Centralizado em coordenadas específicas
                gestureHandling: 'greedy', // Permitir movimentação com um dedo em dispositivos móveis
            });

            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(userLocation);

                new window.google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: 'Você está aqui',
                });

                verificarProximidade(userLocation, map, locaisCadastrados);
            });
        };

        const verificarProximidade = (userLocation, map, locaisCadastrados) => {
            locaisCadastrados.forEach((local) => {
                const localPosicao = { lat: local.latitude, lng: local.longitude };
                const distancia = calcularDistancia(userLocation, localPosicao);
        
                if (distancia < 0.1) {
                    const marker = new window.google.maps.Marker({
                        position: localPosicao,
                        map: map,
                        title: local.nome,
                        icon: {
                            url: 'https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
                            scaledSize: new window.google.maps.Size(45, 45),
                        },
                    });

                    // Adiciona o listener para abrir o modal ao clicar na marcação
                    marker.addListener('click', () => {
                        setSelectedLocal(local); // Atualiza o estado com o local selecionado
                    });
                }
            });
        };

        const calcularDistancia = (loc1, loc2) => {
            const R = 6371; // Raio da Terra em km
            const dLat = (loc2.lat - loc1.lat) * (Math.PI / 180);
            const dLon = (loc2.lng - loc1.lng) * (Math.PI / 180);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(loc1.lat * (Math.PI / 180)) *
                Math.cos(loc2.lat * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        loadGoogleMapsScript(); // Carrega o Google Maps API
    }, []);

    // Função para fechar o modal
    const closeModal = () => {
        setSelectedLocal(null);
    };

    return (
        <div className="realidade-aumentada-container">
            <h1>Experiência RA</h1>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>

            {selectedLocal && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedLocal.nome}</h3>
                        <p>{selectedLocal.descricao}</p>
                        <div className="image-carousel">
                            {selectedLocal.imagens.map(img => (
                                <img src={img} alt={selectedLocal.nome} key={img} />
                            ))}
                        </div>
                        <video src={selectedLocal.video} controls className="info-video"></video>
                        <button className="close-button" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RealidadeAumentada;
