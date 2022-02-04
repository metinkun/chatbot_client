import React, { useCallback, useContext, useState } from 'react';

import './chat-input.scss';

import { ChatContext } from '../../context';

export default function ChatInput() {
  const [message, setMessage] = useState('');

  const {
    state: { chatSocket },
    addNewMessage,
  } = useContext(ChatContext);

  const sendMessage = useCallback(
    (e) => {
      if (e) e.preventDefault();
      if (!message) return;
      console.log('addNewMessage');
      addNewMessage(message, true);
      chatSocket.emit('user-message', message);
      setMessage('');
    },
    [chatSocket, message]
  );

  return (
    <form onSubmit={sendMessage} className='chat-input-container'>
      <div className='input-container'>
        <input
          value={message}
          placeholder='Write a message...'
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </div>
      <div className='send-button' onClick={sendMessage}>
        Send
      </div>
    </form>
  );
}
