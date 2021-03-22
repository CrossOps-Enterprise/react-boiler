import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../state'

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})
