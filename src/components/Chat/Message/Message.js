import React from 'react';

import './Message.css';


const Message = ({ message }) => {

  var date = new Date(message.date)
  
  return (
    (
        <div className="messageOuterContainer">
          <div className="messageInfo">
            <p className="nameParagraph">{message.name}</p> <p className="dateParagraph">, {date.getDate()}/{date.getMonth()}, {date.getHours()}:{date.getMinutes()}</p>
          </div>
          <div className="textContainer">
            <p className="messageParagraph">{message.message}</p>
          </div>
        </div>
        )
  );
}

export default Message;