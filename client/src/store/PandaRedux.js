import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Thunks
export const addPanda = createAsyncThunk('panda/add', async (profileData) => {
  const response = await axios.post('http://localhost:3001/panda/add', profileData);
  return response.data;
});

export const fetchProfile = createAsyncThunk('panda/fetch', async () => {
  console.log("fetchProfile:");
  const response = await axios.get('http://localhost:3001/panda/profile');  
  return response.data;
});

// Slice
const pandaSlice = createSlice({
  name: 'panda',
  initialState: {
    message: null,
    panda: null,
    profile: []
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(addPanda.fulfilled, (state, action) => {
      state.message = "created";
      state.panda = action.payload;
    })
    .addCase(fetchProfile.fulfilled, (state, action) => {
      console.log("here!!", action);
      state.profile = action.payload;
    });
  }
});

export default pandaSlice.reducer;
