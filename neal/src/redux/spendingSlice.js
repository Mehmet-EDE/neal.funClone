import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const spendingSlice=createSlice({
 name:'spending',
 initialState:{
  items:[],
  status:'idle'
 },
 reducers:{},
 extraReducers:{},
})
export default spendingSlice.reducer