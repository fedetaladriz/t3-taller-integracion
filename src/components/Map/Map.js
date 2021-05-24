import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, Polyline, Marker, Tooltip } from 'react-leaflet'




const Map = ({flights, positions} ) => {

    const center = [-33.53, -69.48]
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "brown"]

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    if ((flights) && (Object.keys(positions).length >= flights.length)){
        return (
            <div id="mapOuterContainer">
                <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
    
                    {flights.map((f, i) => <Polyline key={i} color={getRandomColor()} dashArray='5, 5' positions={[f.origin, f.destination]} />)}
                    {
                        Object.keys(positions).map((key, index) => ( 
                        <Polyline key={index} color="white" positions={positions[key]} /> 
                        ))
                    }
                    
                    {
                    flights.map((f, i) =>
                        (<Marker key={i} position={positions[f.code][positions[f.code].length - 1]} >
                            <Tooltip direction="top" opacity={1} offset={[-15, -5]}>
                                {f.code}
                            </Tooltip>
                        </Marker>)
                        )
                    }
                    
                </MapContainer>
            </div>
        );
    } else {
        return <h4>Cargando mapa...</h4>
    }

}

export default Map;