import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// Thunks
export const addPanda = createAsyncThunk('panda/add', async (profileData) => {
  const response = await axios.post('http://localhost:3001/panda/add', profileData);
  return response.data;
});

export const fetchProfile = createAsyncThunk('panda/fetch', async () => {
  const response = await axios.get('http://localhost:3001/panda/fetchAll');  
  return response.data;
});




export const editPanda = createAsyncThunk('panda/edit', async (formData) => {
  console.log(formData);
  const response = await axios.put(`http://localhost:3001/panda/edit`, formData);
  return response.data;
});

export const fetchPandaById = createAsyncThunk('panda/fetchById', async (id) => {
  console.log(id);
  const response = await axios.get(`http://localhost:3001/panda/fetchById/${id}`);
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
  reducers: {
    clearPandaState: (state) => {
      state.message = null;
      state.panda = null;
    }
  },
  extraReducers: builder => {
    builder
    .addCase(addPanda.fulfilled, (state, action) => {
      state.message = "created";
      state.panda = action.payload;
    })
    .addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(fetchPandaById.fulfilled, (state, action) => {
      state.panda = action.payload;
    })
    .addCase(editPanda.fulfilled, (state, action) => {
      state.message = "updated!";
    });
  }
});
export const { clearPandaState } = pandaSlice.actions;
export default pandaSlice.reducer;
