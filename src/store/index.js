import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/countReducers';

const store = configureStore({
  reducer: {
    // Codes for all reducers
    count: countReducer,
  },
});

export default store;
