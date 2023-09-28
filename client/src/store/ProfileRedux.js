import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProfile = createAsyncThunk('panda/profile/fetch', async () => {
  const response = await axios.get('http://localhost:3001/panda/profile');
  return response.data;
});

const profileSlice = createSlice({
  name: 'panda/profile',
  initialState: null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => action.payload);
  }
});

export default profileSlice.reducer;
