import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import logger from 'redux-logger';

const root = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: root,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
});
