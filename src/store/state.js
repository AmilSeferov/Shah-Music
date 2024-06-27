import { configureStore } from '@reduxjs/toolkit'
import  fetchReducer  from './../reducers/reduce'
export const store = configureStore({
  reducer: {
    music: fetchReducer,
  },
})