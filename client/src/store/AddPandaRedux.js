import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const addPanda = createAsyncThunk('panda/add', async (profileData) => {
  const response = await axios.post('http://localhost:3001/panda/add', profileData);
  return response.data;
});

const addPandaSlice = createSlice({
  name: 'addPanda',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addPanda.fulfilled, (state, action) => action.payload);
  }
});

export default addPandaSlice.reducer;
