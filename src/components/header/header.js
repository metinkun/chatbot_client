import React, { useContext } from 'react';

import { EyeOutlined, ClockCircleOutlined, SettingOutlined } from '@ant-design/icons';
import './header.scss';

import { ChatContext } from '../../context';

export default function Header() {
  const {
    state: { chats, activeChatId },
  } = useContext(ChatContext);

  const chat = chats.find((el) => el.id === activeChatId);

  const renderIcon = () => {
    if (chat.contact.icon) return <img src={chat.contact.icon} alt='vector' />;

    const nameSplit = chat.contact.name.split(' ');
    const abbreviation = (nameSplit[0][0] + nameSplit[1][0]).toUpperCase();
    return (
      <div className='name-symbol-container'>
        <div className='user-symbol-container' style={{ backgroundColor: chat.color }}>
          {abbreviation}
        </div>
      </div>
    );
  };

  return (
    <div className='header-container'>
      <div className='message-list-settings-section'>
        <div>All Messages</div>
        <SettingOutlined />
      </div>

      <div className='logo-name-section'>
        <div className='logo-section-container'>
          <div className='icon-container'>{renderIcon()}</div>

          <div className='title-container'>
            <div className='logo-name-container'>
              {chat.contact.logo ? (
                <img src={chat.contact.logo} alt='logo' />
              ) : (
                <h4>{chat.contact.name}</h4>
              )}
            </div>

            {chat.typing ? <div>Typing...</div> : <div>{chat.contact.title}</div>}
          </div>
        </div>

        <div className='name-section-container'>
          <div className='name-section-item'>
            <EyeOutlined />
            <div>booty-beep-boop</div>
          </div>
          <div className='name-section-item'>
            <ClockCircleOutlined />
            <div>5m</div>
          </div>
        </div>
      </div>
    </div>
  );
}
