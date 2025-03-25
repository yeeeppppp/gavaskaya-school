import React, { useEffect, useRef } from 'react';
import { load } from '@2gis/mapgl';
import './Map.css';

export const Map = ({ onSelectMarker }) => {
    const tooltipRef = useRef(null);
    const markersRef = useRef([]);

    const coords = [
        { coordinates: [30.242619, 59.928302], tooltip: 'В.О., ул. Гаванская, 3' },
    ];

    useEffect(() => {
        let map;

        // Функция для скрытия тултипа
        const hideTooltip = () => {
            if (tooltipRef.current) {
                tooltipRef.current.style.display = 'none';
            }
        };

        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [30.242619, 59.928302],
                zoom: 15,
                key: 'c46f0aab-1f42-41d0-afe5-651d326e431c',
            });

            // Добавляем обработчик клика на карту
            map.on('click', () => {
                hideTooltip();
            });

            coords.forEach((coord, index) => {
                const marker = new mapglAPI.Marker(map, {
                    coordinates: coord.coordinates,
                });

                marker.on('click', (event) => {
                    const tooltipEl = tooltipRef.current;

                    if (!tooltipEl) {
                        console.error('Tooltip element is not rendered');
                        return;
                    }

                    // Если тултип уже виден, скрываем его
                    if (tooltipEl.style.display === 'block') {
                        hideTooltip();
                        return;
                    }

                    // Показываем тултип
                    tooltipEl.innerHTML = `
                        <div>${coord.tooltip}</div>
                    `;
                    tooltipEl.style.display = 'block';
                    tooltipEl.style.top = `${event.point[1] + 5}px`;
                    tooltipEl.style.left = `${event.point[0] + 5}px`;
                });

                markersRef.current.push(marker);
            });
        });

        return () => {
            markersRef.current.forEach(marker => marker.destroy());
            if (map) map.destroy();
        };
    }, []);

    return (
        <div
            style={{
                width: '568px',
                height: '337px',
                position: 'relative',
                margin: 0,
                padding: 0,
                borderRadius: '38px', // Закругление углов
                overflow: 'hidden', // Скрываем части карты за пределами границ
            }}
        >
            <div
                id="map-container"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            />
            <div
                ref={tooltipRef}
                id="tooltip"
                style={{
                    display: 'none',
                    position: 'absolute',
                    padding: '10px',
                    background: '#212121',
                    color: '#fff', // Добавлен цвет текста для лучшей читаемости
                    boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                    borderRadius: '4px',
                    pointerEvents: 'auto',
                    zIndex: 1000,
                }}
            />
        </div>
    );
};

export default Map;