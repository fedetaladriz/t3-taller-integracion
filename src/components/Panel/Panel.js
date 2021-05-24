import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import {io} from 'socket.io-client';

import './Panel.css';

import Map from '../Map/Map'
import Chat from '../Chat/Chat';
import FlightsInfo from '../FlightsInfo/FlightsInfo'

let socket;

const Panel = ({ location }) => {
    const [name, setName] = useState('')
    const [flights, setFlights] = useState([])
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [positions, setPositions] = useState({})
    

    const ENDPOINT = 'wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl';
    const path = '/flights';


    function updatePositions(newPosition){
        let code = newPosition.code;
        let position = newPosition.position;
        setPositions((prevPositions) => {
            let newDict = {...prevPositions}
            if (!(code in prevPositions)){
                var aux = new Array();
                aux[0] = position;
    
                newDict[code] = aux;
                return newDict
            } else {
                let aux = [...prevPositions[code], position]
                newDict[code] = aux;
                return newDict
            }
        })
        
    }

    useEffect(() => {
        const {name} = queryString.parse(location.search);

        socket = io(ENDPOINT, {
            path:path
        });

        setName(name);
        
        socket.emit('FLIGHTS')
        
        // Recieve
        socket.on('POSITION', newPosition => {
            updatePositions(newPosition)
        })


        socket.on('FLIGHTS', flights => {
            setFlights(flights);

        })

        socket.on('CHAT', message => {
            setMessages(messages => [...messages, message]);
        })

    }, [])

    const sendMessage = () => {
        if(message) {
          socket.emit('CHAT', {name: name, message: message}, () => setMessage(''));
        }
      }

    const updateFlights = () => {
        socket.emit('FLIGHTS')
    }

    return (                
        <div className="outerContainer">
            <h1>Panel de control</h1>
            <div className="columnsContainer">
                <div className="firstColumn">
                    <h3>Mapa</h3>
                    < Map flights={flights} positions={positions}/>
                </div>
                <div className="secondColumn">
                    <h3>Chat</h3>
                    <Chat messages={messages} setMessage={setMessage} sendMessage={sendMessage} message={message}/>
                </div>
            </div>
            <div className="flightsContainer">
                <h3>Información de vuelos</h3>
                <FlightsInfo flights={flights} updateFlights={updateFlights}/>
            </div>
        </div>



    )
}

export default Panel;