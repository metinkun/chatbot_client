import React, { useContext } from 'react';

import './message-list-bar.scss';

import { ChatContext } from '../../context';

export default function MessageListBar() {
  const {
    state: { chats, activeChatId },
    setActiveChat,
  } = useContext(ChatContext);

  const renderChatInfo = (chat) => {
    const nameSplit = chat.contact.name.split(' ');
    const abbreviation = (nameSplit[0][0] + nameSplit[1][0]).toUpperCase();
    var options = { weekday: 'short', month: 'short', day: 'numeric' };
    let lastMessage = chat.messages[chat.messages.length - 1].content;
    if (lastMessage.length > 20) lastMessage = lastMessage.substring(0, 20) + '...';
    return (
      <div key={chat.id} style={{ backgroundColor: chat.id === activeChatId ? 'silver' : 'unset' }}>
        <div className='message-list-item-container' onClick={() => setActiveChat(chat.id)}>
          <div className='name-symbol-container'>
            <div className='user-symbol-container' style={{ backgroundColor: chat.color }}>
              {abbreviation}
            </div>
            <div className='name-container'>
              {chat.contact.logo ? (
                <img src={chat.contact.logo} alt='logo' />
              ) : (
                <h4>{chat.contact.name}</h4>
              )}

              <p>{lastMessage}</p>
            </div>
          </div>

          {chat.isOnline ? (
            <div className={'status-online'}>online</div>
          ) : (
            <div className={'status-offline'}>
              {chat.lastSeen.toLocaleDateString('en-US', options)}
            </div>
          )}
        </div>
        <div className='separator' />
      </div>
    );
  };

  const renderChats = () => {
    return chats.map((el) => renderChatInfo(el));
  };

  return <div className='message-list-bar-container'>{renderChats()}</div>;
}
