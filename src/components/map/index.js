import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AutoComplete from '../autocomplete/index';
import geoJSON from '../../data/geoJson';
import counties from '../../data/counties';
import { ignoreAcentuation, capitalize } from '../../util/stringHandler';
import { redirectTo } from '../../util/navigation';
import {
    MapContainer,
    MapRoot,
    defaultStyle,
    hoveredStyle,
    filteredDefaultStyle,
    filteredHoveredStyle,
    ErrorMessage
} from './styles';

/* Leaflet elements overrider */
import '../../styles/leafletElementsOverrider.css';

const Map = () => {

    const [defaultLayer] = useState(L.geoJSON(geoJSON, {
        style: defaultStyle,
        onEachFeature: (feature, layer) => {
            layer.on({
                mouseover: (e) => {
                    const layer = e.target;

                    layer.setStyle(hoveredStyle);

                    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                        layer.bringToFront();
                    }
                },
                mouseout: (e) => {
                    const layer = e.target;

                    layer.setStyle(defaultStyle);
                },
                click: () => {
                    redirectTo(`/county/${layer.feature.properties.NM_MUNICIP.toLowerCase()}`)
                }
            });

            layer.bindTooltip(capitalize(layer.feature.properties.NM_MUNICIP), {
                className: 'tooltip',
                opacity: 1,
            });
        }
    }));

    const [tileLayer] = useState(L.tileLayer(
        // 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Vituuuu'
    }));

    const [map, setMap] = useState();
    const [error, setError] = useState(false);
    const [filteredLayerID, setFilteredLayerID] = useState();
    const [closeSuggestions, setCloseSuggestions] = useState(false);
    const [layerGroup] = useState(L.layerGroup([defaultLayer, tileLayer]));
    const [isFilterng, setIsFiltering] = useState(false);

    useEffect(() => {
        setMap(L.map('map', {
            center: [-5.9059686, -36.533668],
            zoom: 7.5,
            minZoom: 8,
            maxZoom: 12,
            maxBounds: L.latLngBounds([[-3.492533, -39.956314], [-8.251142, -32.545212]]),
            layers: layerGroup
        }));
    }, [layerGroup]);

    const isCountyNameValid = (county) => {
        if (county) {
            const countiesWithoutAcentuation = [];
            const countyWithoutAcentuation = ignoreAcentuation(county.toUpperCase());

            for (let county of counties) {
                countiesWithoutAcentuation.push(ignoreAcentuation(county));
            }

            return countiesWithoutAcentuation.includes(countyWithoutAcentuation.toUpperCase());
        }
    }

    const handleFilter = (countyName) => {
        if (!isCountyNameValid(countyName)) {
            setError(true);

            return setTimeout(() => {
                setError(false);
            }, 3000)
        }

        setIsFiltering(true);

        const filteredLayer = L.geoJSON(geoJSON, {
            style: filteredDefaultStyle,
            onEachFeature: (feature, layer) => {
                layer.on({
                    mousemove: () => layer.setStyle(filteredHoveredStyle),
                    mouseout: () => layer.setStyle(filteredDefaultStyle),
                    click: () => {
                        redirectTo(`/county/${layer.feature.properties.NM_MUNICIP.toLowerCase()}`)
                    }
                });
            },
            filter: (feature, layer) => {
                return (
                    ignoreAcentuation(feature.properties.NM_MUNICIP).toLowerCase() === ignoreAcentuation(countyName).toLowerCase()
                )
            }
        });

        setFilteredLayerID(filteredLayer._leaflet_id);

        if (layerGroup.hasLayer(filteredLayerID)) {
            layerGroup.removeLayer(filteredLayerID);
        }

        layerGroup.addLayer(filteredLayer);

        const pathPosition = filteredLayer._leaflet_id - 1;
        const layer = filteredLayer._layers[pathPosition];
        const { _bounds } = layer;
        const { _northEast, _southWest } = _bounds;

        // eslint-disable-next-line
        const bounds = Array(_southWest, _northEast);
        map.fitBounds(bounds, { duration: .35 });
    }

    const handleRemoveFilter = () => {
        if (layerGroup.hasLayer(filteredLayerID)) {

            setIsFiltering(false);

            layerGroup.clearLayers();
            layerGroup.addLayer(tileLayer);
            layerGroup.addLayer(defaultLayer);

            setFilteredLayerID(null);

            map.flyToBounds([[-3.492533, -39.956314], [-8.251142, -32.545212]], {
                duration: .35
            });
        }
    }

    const handleCloseSuggestions = () => {

        setCloseSuggestions(true);

        setTimeout(() => {
            setCloseSuggestions(false);
        }, 100);
    }

    return (
        <React.Fragment>           
            <AutoComplete
                placeholder='Buscar município'
                options={counties}
                filter={handleFilter}
                removeFilter={handleRemoveFilter}
                isFilterng={isFilterng}
                closeSuggestions={closeSuggestions}
            />
            <ErrorMessage error={error}>Município não encontrado</ErrorMessage>
            <MapContainer onClick={handleCloseSuggestions}>
                <MapRoot id='map' />
            </MapContainer>
        </React.Fragment>
    )
}

export default Map;