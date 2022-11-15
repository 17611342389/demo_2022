import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware,logger)
});

sagaMiddleware.run(mySaga)
