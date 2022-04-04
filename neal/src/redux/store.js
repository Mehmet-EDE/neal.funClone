import { configureStore } from '@reduxjs/toolkit'
import { spendingSlice } from './spendingSlice'

export const store=configureStore({
 reducer:{
  spending:spendingSlice
 }
})