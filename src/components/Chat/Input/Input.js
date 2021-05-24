import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {


  return (
    <div className="inputOuterContainer">
        <input
        className="input"
        type="text"
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        />
        <button className="sendButton" onClick={() => sendMessage()}>Enviar</button>
    </div>
  );
}

export default Input;