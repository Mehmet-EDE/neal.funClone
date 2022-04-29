import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import product from '../product.json'

export const spendingSlice = createSlice({
 name: 'spending',
 initialState: {
  items: product,
  money: 128000000000
 },
 reducers: {
  updateCount: (state, action) => {
   const { id, count } = action.paylaod
   const item = state.items.find((tp) => tp.id === id)
   item.count = count
   let price = 0
   state.items.map((prod) => {
    price += Number(prod.count) * Number(prod.productPrice)
   });
   state.money = Number(state.money) - Number(price)
  },
 },
 extraReducers: {},
})
export default spendingSlice.reducer