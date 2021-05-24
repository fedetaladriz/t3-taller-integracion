import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';

import './Chat.css';
import Message from './Message/Message';
import Input from './Input/Input';



const Chat = ({ messages, setMessage, sendMessage, message }) => {

  return (
    <div className="chatOuterContainer">
        <ScrollToBottom className="messages">
            {messages.map((m, i) => <div key={i}><Message message={m} /></div>)}
        </ScrollToBottom>
        <div className="input">
            <Input setMessage={setMessage} sendMessage={sendMessage} message={message} />
        </div>
    </div>
  );
}

export default Chat;