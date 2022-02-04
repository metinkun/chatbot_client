import React, { useContext } from 'react';

import './chat-view.scss';

import { ChatContext } from '../../context';

export default function ChatView() {
  const {
    state: { chats, activeChatId },
  } = useContext(ChatContext);

  const chat = chats.find((el) => el.id === activeChatId);

  const renderMessage = (message, index) => {
    if (message.isMine)
      return (
        <div key={index} className='my-message-container'>
          <div className='my-message'>{message.content}</div>
        </div>
      );
    return (
      <div key={index} className='message-container'>
        <div className='message'>{message.content}</div>
      </div>
    );
  };
  console.log(chat.messages);

  const renderMessages = () => {
    return chat.messages.map((el, i) => renderMessage(el, i));
  };

  return <div className='chat-view-container'>{renderMessages()}</div>;
}
