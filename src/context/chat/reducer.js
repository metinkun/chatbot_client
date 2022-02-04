import { ADD_NEW_MESSAGE, SET_ACTIVE_CHAT, CHANGE_TYPING, SET_SOCKET } from './keys';

export const initialState = {
  chats: [
    {
      id: 1,
      messages: [
        {
          isMine: false,
          content: 'Hello world',
          date: new Date('01-09-2022'),
        },
      ],
      lastSeen: new Date('01-09-2022'),
      typing: true,
      isOnline: true,

      contact: {
        icon: '/vector.png',
        logo: '/sstteklogo.svg',
        cover: '/ssttekcover.png',
        name: 'sst tek',
        title: 'Cloud , internet',
        email: 'ssttech@example.com',
        phone: '+04 - 123456789',
        labels: ['Bot', 'React'],
      },
      color: 'orange',
      attachments: ['Dataset.cvs', 'cv.txt'],
    },
    {
      id: 2,
      messages: [
        {
          isMine: false,
          content: 'Hello there!',
          date: new Date('01-08-2022'),
        },
      ],
      lastSeen: new Date('01-08-2022'),
      typing: false,
      isOnline: false,

      contact: {
        name: 'Brandon Andrews',
        title: 'yeap',
        email: 'Brandon@example.com',
        phone: '+04 - 267387',
        labels: ['Sales'],
      },
      color: 'purple',
      attachments: ['titles.cvs', 'asd.txt', 'names.txt'],
    },
    {
      id: 3,
      messages: [
        {
          isMine: false,
          content: 'Thanks',
          date: new Date('01-07-2022'),
        },
      ],
      lastSeen: new Date('01-07-2022'),
      typing: false,
      isOnline: false,

      contact: {
        name: 'Clyton Day',
        title: 'yeap',
        email: 'Clyton@example.com',
        phone: '+04 - 093718212',
        labels: ['Friends'],
      },
      color: 'coral',
      attachments: ['you.jpg', 'cv.txt'],
    },
    {
      id: 4,
      messages: [
        {
          isMine: false,
          content: 'This is a question',
          date: new Date('01-06-2022'),
        },
      ],
      lastSeen: new Date('01-06-2022'),
      typing: false,
      isOnline: true,

      contact: {
        name: 'Bernice Clark',
        title: 'yeap',
        email: 'Bernice@example.com',
        phone: '+04 - 1258674',
        labels: ['Friends'],
      },
      color: 'yellow',
      attachments: ['Bernice.jpg', 'Clark.txt'],
    },
    {
      id: 5,
      messages: [
        {
          isMine: false,
          content: 'Do you need help',
          date: new Date('01-05-2022'),
        },
      ],
      lastSeen: new Date('01-05-2022'),
      typing: false,
      isOnline: true,

      contact: {
        name: 'Christine Fields',
        title: 'yeap',
        email: 'Christine@example.com',
        phone: '+04 - 856137687',
        labels: ['Friends'],
      },
      color: 'orange',
      attachments: ['Christine.jpg', 'Fields.txt'],
    },
    {
      id: 6,
      messages: [
        {
          isMine: false,
          content: 'Choose the perfect',
          date: new Date('01-04-2022'),
        },
      ],
      lastSeen: new Date('01-04-2022'),
      typing: false,
      isOnline: false,

      contact: {
        name: 'Mike Morgan',
        title: 'mikie',
        email: 'Mike@example.com',
        phone: '+04 - 18023717634',
        labels: ['Friends'],
      },
      color: 'lightblue',
      attachments: ['Mike.jpg', 'Morgan.txt'],
    },
    {
      id: 7,
      messages: [
        {
          isMine: false,
          content: 'Yes Thanks',
          date: new Date('01-03-2022'),
        },
      ],
      lastSeen: new Date('01-03-2022'),
      typing: false,
      isOnline: false,

      contact: {
        name: 'Callie Schmidt',
        title: 'Schmidt',
        email: 'Callie@example.com',
        phone: '+04 - 12635612',
        labels: ['Friends'],
      },
      color: 'lightgreen',
      attachments: ['Callie.jpg', 'Schmidt.txt'],
    },
    {
      id: 8,
      messages: [
        {
          isMine: false,
          content: 'Of course',
          date: new Date('01-02-2022'),
        },
      ],
      lastSeen: new Date('01-02-2022'),
      typing: false,
      isOnline: false,

      contact: {
        name: 'Herbert Watkins',
        title: 'Watkins',
        email: 'Herbert@example.com',
        phone: '+04 - 123456789',
        labels: ['Friends'],
      },
      color: 'aqua',
      attachments: ['Herbert.jpg'],
    },
  ],
  activeChatId: 1,
  chatSocket: {},
};

const reducer = (state = initialState, { type, payload }) => {
  let activeChat;
  switch (type) {
    case ADD_NEW_MESSAGE:
      activeChat = state.chats.find((el) => el.id === state.activeChatId);
      console.log('messagepush', payload.message);
      if (!activeChat.messages.find((el) => el.id === payload.message.id))
        activeChat.messages.push(payload.message);
      console.log('--');
      return {
        ...state,
      };
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChatId: payload,
      };
    case SET_SOCKET:
      return {
        ...state,
        chatSocket: payload,
      };
    case CHANGE_TYPING:
      activeChat = state.chats.find((el) => el.id === state.activeChatId);
      activeChat.typing = payload.isTyping;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
