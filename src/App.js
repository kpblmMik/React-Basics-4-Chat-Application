import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const messageInputRef = useRef();

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageText = messageInputRef.current.value.trim();
    if (messageText) {
      const newMessage = {
        id: messages.length + 1,
        text: messageText,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      messageInputRef.current.value = '';
    }
  };

  const chatMessagesEndRef = useRef(null);

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className="message">
              {message.text}
            </div>
          ))}
          <div ref={chatMessagesEndRef} />
        </div>
        <form className="message-form" onSubmit={handleMessageSubmit}>
          <input type="text" ref={messageInputRef} placeholder="Type your message..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
