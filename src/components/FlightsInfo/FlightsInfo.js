import React from "react";

import './FlightsInfo.css';
import FlightInfo from './FlightInfo/FlightInfo';

const FlightsInfo = ({ flights, updateFlights }) => {

  return (
    <div className="flightsInfoOuterContainer">
        <button className="updateFlightsButton" onClick={() => updateFlights()}>Recargar<br/>vuelos</button>
        <div className="flights">
            {flights.map((f, i) => <FlightInfo key={i} flight={f} />)}
        </div>
    </div>

  );
}

export default FlightsInfo;