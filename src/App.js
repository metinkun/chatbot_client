import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import './App.scss';

// components
import Header from './components/header';
import InfoBar from './components/info-bar';
import MessageListBar from './components/message-list-bar';
import ChatView from './components/chat-view';
import ChatInput from './components/chat-input';
import io from 'socket.io-client';


import { ChatContext } from './context';

function App() {
  const {
    state: { activeChatId, chatSocket },
    setSocket,
    addNewMessage,
    changeTyping,
  } = useContext(ChatContext);

  useEffect(() => {
    const socket = io('https://botty.alexgurr.com');
    setSocket(socket);

    socket.on('bot-message', (message) => {
      var mySound = new Audio('/message.mp3');
      mySound.load();
      console.log('message', message);
      addNewMessage(message, false);
      mySound.play();
    });

    socket.on('bot-typing', () => {
      console.log('typing');
      changeTyping(true);
      setTimeout(() => {
        changeTyping(false);
      }, 3000);
    });

    socket.on('connect', () => {
      console.log('connected');
    });
  }, []);
  return (
    <div className='app-container'>
      <div className='content-container'>
        <Header />

        <div className='chat-list-view-container'>
          <MessageListBar />

          <div className='chat-section-container'>
            <ChatView />
            <ChatInput />
          </div>
        </div>
      </div>

      <InfoBar />
    </div>
  );
}

export default App;
