import React from 'react';

import './FlightInfo.css';

const FlightInfo = ({ flight }) => {

  return (
    (
        <div className="flightOuterContainer">
            <p><b>{flight.airline} - {flight.code}</b></p>
            <p>Pasajeros:</p>
            <ul className="passengers">
                {flight.passengers.map((p, i) => <li key={i}> {p.name} (age {p.age}) </li>)}
            </ul>
        </div>
        )
  );
}

export default FlightInfo;