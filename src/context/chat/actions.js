import { ADD_NEW_MESSAGE, SET_ACTIVE_CHAT, SET_SOCKET, CHANGE_TYPING } from './keys';
import shortid from 'shortid';
export const addNewMessage = (dispatch) => async (content, isMine) => {
  console.log('addNewMessagedispatch');
  dispatch({
    type: ADD_NEW_MESSAGE,
    payload: { message: { date: Date.now(), isMine, content, id: shortid.generate() } },
  });
};

export const setActiveChat = (dispatch) => async (chatId) => {
  dispatch({ type: SET_ACTIVE_CHAT, payload: chatId });
};

export const setSocket = (dispatch) => async (socket) => {
  dispatch({ type: SET_SOCKET, payload: socket });
};

export const changeTyping = (dispatch) => async (isTyping) => {
  dispatch({ type: CHANGE_TYPING, payload: { isTyping } });
};
