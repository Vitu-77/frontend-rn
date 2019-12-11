// import React, { useState } from 'react';
// import MapContext from './context';
// import L from 'leaflet';
// import geoJSON fro../../components/map/geoJsonson';
// import { mouseEvents, defaultLayerStyle } from '../../hooks/map/layersConfig';
// import 'leaflet/dist/leaflet.css';

// const MapProvider = ({ children }) => {

//     const [geoJson, setGeoJson] = useState(geoJSON);
//     const [defaultGeoJson, setDefaultGeoJson] = useState(geoJSON);

//     const init = async () => {
//         return L.map('map', {
//             center: [-5.9059686, -36.533668],
//             zoom: 8.5,
//             minZoom: 8,
//             maxZoom: 17,
//             zoomSnap: .1,
//             preferCanvas: true,
//         });
//     }

//     const setTile = async (map) => {

//         const tile = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png';

//         return L.tileLayer(tile, {
//             attribution: ''
//         }).addTo(map);
//     }

//     const setlayers = async (map) => {
//         return L.geoJSON(geoJson, {
//             style: defaultLayerStyle,
//             onEachFeature: mouseEvents
//         }).addTo(map);
//     }

//     const filter = (name) => {
//         const { features } = geoJson;
        
//         const filter = (feature) => {
//             if(feature.properties.NM_MUNICIP == name){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }

//         const filteredArray = features.filter(filter);
//         const newGeoJson = geoJson;
//         newGeoJson.features = filteredArray;
//         setGeoJson(newGeoJson);
//         setlayers()
//     }
    
    
//     const show = () => {
//         console.log(geoJson);
//     }

//     const limitDraggableArea = (map) => {
//         const bounds = L.latLngBounds([[-3.492533, -39.956314], [-8.251142, -32.545212]]);

//         map.setMaxBounds(bounds);

//         return map.on('drag', () => {
//             map.panInsideBounds(bounds, { animate: false });
//         });
//     }

//     const index = async () => {
//         const _map = await init();
//         await setTile(_map);
//         await setlayers(_map);
//         await limitDraggableArea(_map);
//     }

//     return (
//         <MapContext.Provider value={{ index, show, filter }}>
//             {children}
//         </MapContext.Provider>
//     )
// }

// export default MapProvider;