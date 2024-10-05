import React, { useEffect } from 'react';
import '../css/RealidadeAumentada.css';

const RealidadeAumentada = () => {
    useEffect(() => {
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
                zoom: 18, // Aumenta o nível de zoom inicial
                center: { lat: -20.945755, lng: -41.345579 }, // Centralizado em coordenadas específicas
                gestureHandling: 'greedy', // Permitir movimentação com um dedo em dispositivos móveis
            });
        
            const userMarker = new window.google.maps.Marker({
                map: map,
                title: 'Você está aqui',
            });
        
            // Monitorar a posição do usuário
            navigator.geolocation.watchPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
        
                // Atualizar o centro do mapa para a localização do usuário
                map.setCenter(userLocation);
                
                // Atualizar a posição do marcador
                userMarker.setPosition(userLocation);
        
                verificarProximidade(userLocation, map, locaisCadastrados);
            }, (error) => {
                console.error('Erro ao obter a localização:', error);
            }, {
                enableHighAccuracy: true, // Habilita a precisão alta
                maximumAge: 0, // Não usa uma posição armazenada
                timeout: 5000 // Tempo limite para obter a posição
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

                    const infoWindowContent = `
                        <div class="info-window-content">
                            <h3>${local.nome}</h3>
                            <p>${local.descricao}</p>
                            <div class="image-carousel">
                                ${local.imagens.map(img => `<img src="${img}" alt="${local.nome}" class="info-image" />`).join('')}
                            </div>
                            ${local.video ? `<br/><video src="${local.video}" controls class="info-video"></video>` : ''}
                            ${local.audio ? `<br/><audio src="${local.audio}" controls class="info-audio"></audio>` : ''}  <!-- Adiciona o elemento de áudio -->
                        </div>
                    `;

                    const infoWindow = new window.google.maps.InfoWindow({
                        content: infoWindowContent,
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(map, marker);
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

    return (
        <div className="realidade-aumentada-container">
            <h1>Experiência RA</h1>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
    );
};

export default RealidadeAumentada;
