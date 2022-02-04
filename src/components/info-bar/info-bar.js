import React, { useContext } from 'react';

import Ssttekcom from '../../assets/images/ssttek-com.png';
import { CloseOutlined } from '@ant-design/icons';
import './info-bar.scss';

import { ChatContext } from '../../context';

export default function InfoBar() {
  const {
    state: { chats, activeChatId },
  } = useContext(ChatContext);

  const chat = chats.find((el) => el.id === activeChatId);

  const renderLabels = () => {
    return chat.contact.labels.map((el) => (
      <div key={el} className='label-item'>
        {el}
        <CloseOutlined style={{ fontSize: '10px', marginLeft: '8px' }} />
      </div>
    ));
  };
  const renderAttachments = () => {
    return chat.attachments.map((el) => (
      <div key={el} className='attachment-item'>
        <div className='dot' />
        {el}
      </div>
    ));
  };

  return (
    <div className='info-bar-container'>
      {chat.contact.cover && (
        <div className='dark-logo-container'>
          <img src={Ssttekcom} alt='ssttek' />
        </div>
      )}

      <div className='content-section-container'>
        <div className='section-content-item'>
          <h6>EMAIL</h6>
          <p>{chat.contact.email}</p>
        </div>

        <div className='section-content-item'>
          <h6>PHONE</h6>
          <p>{chat.contact.phone}</p>
        </div>
      </div>

      <div className='content-section-container'>
        <div className='section-content-item'>
          <h6>LABELS</h6>
          <div className='labels-container'>{renderLabels()}</div>
        </div>
      </div>

      <div className='content-section-container'>
        <div className='section-content-item'>
          <h6>ATTACHMENTS</h6>
          <div className='attachments-list-container'>{renderAttachments()}</div>

          <div className='wiew-text'>View All</div>
          <div className='react-button'>React</div>
        </div>
      </div>
    </div>
  );
}
