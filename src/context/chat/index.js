import createDataContext from '../createDataContext';
import reducer, { initialState } from './reducer';
import * as actions from './actions';

export const { Context: ChatContext, Provider: ChatProvider } = createDataContext(
  reducer,
  { ...actions },
  initialState
);
