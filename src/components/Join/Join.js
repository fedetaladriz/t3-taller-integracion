import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('')

    return (
        <div className="joinOuterContainer">
            <h2>Login panel de control de vuelos</h2>
            <div><input className="nameInput" placeholder="Escribe tu nombre..." type="text" onChange={(event) => setName(event.target.value)}/></div>
            <Link to={`/chat?name=${name}`}>
                <button className="submitButton" type='submit'>Entrar</button>
            </Link>
        </div>
    )
}

export default Join;