import styled from 'styled-components';

const MapRoot = styled.div`
    width: 100%;
    height: 100%;
`;

const MapContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const ErrorMessage = styled.span`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
    font-size: 24px;
    color: white;
    background: red;
    border-radius: 6px;
    z-index: 10000 !important;
    pointer-events: none;
    opacity: ${props => props.error ? 1 : 0};
    transition: 400ms;
`;

/* ------ layer styles  ------ */

const defaultStyle = {
    fillColor: 'rgba(65, 62, 164)',
    fillOpacity: .8,
    weight: 1,
    opacity: 1,
    dashArray: '0',
    color: 'white',
}

const hoveredStyle = {
    fillColor: 'rgba(0, 116, 232)',
    fillOpacity: .9,
    weight: 2.2,
    opacity: 1,
    dashArray: '0',
    color: 'white',
    boxShadow: '0 0 5px 10px red'
}

const filteredDefaultStyle = {
    fillColor: 'rgba(100, 90, 230)',
    fillOpacity: .9,
    weight: 2.4,
    opacity: 1,
    dashArray: '0',
    color: 'white',
}

const filteredHoveredStyle = {
    fillColor: 'rgba(0, 200, 140)',
    fillOpacity: 1,
    weight: 2.4,
    opacity: 1,
    dashArray: '0',
    color: 'white',
}

export {
    MapRoot,
    MapContainer,
    ErrorMessage,
    defaultStyle,
    hoveredStyle,
    filteredDefaultStyle,
    filteredHoveredStyle
};