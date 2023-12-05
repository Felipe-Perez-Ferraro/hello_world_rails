import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  isFetched: false,
};

export const fetchMessages = createAsyncThunk(
  'messages/fetchmessages',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/messages');
    const result = await response.json();
    return result;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.isFetched = true;
    });
  },
});

export default messagesSlice.reducer;
