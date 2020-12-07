import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../features/userSlice';
import chatReducer from '../features/chatSlice';


export default configureStore({
  reducer: {
    user:userReducer,
    chat: chatReducer,
  },
});
