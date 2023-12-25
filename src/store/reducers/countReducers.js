import { createSlice } from '@reduxjs/toolkit';

const countInitialState = { number: 0 };

const countSlice = createSlice({
  name: 'counter',
  initialState: countInitialState,
  reducers: {
    // state - the initialstate declared
    // action - the action that is being dispatched/payload
    countChange(state, action) {
      // Accessing the number in the variable countInitialState
      state.number = action.payload;
    },
  },
});

// Exporting the actions fromt the countSlice into the countActions and reducers
const countActions = countSlice.actions;
const countReducer = countSlice.reducer;

export { countActions, countReducer };
