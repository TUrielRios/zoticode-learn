// src/components/MessageBoard.js
import React, { useState } from 'react';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <section id="messages">
      <h2>Muro de Mensajes</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </section>
  );
};

export default MessageBoard;
