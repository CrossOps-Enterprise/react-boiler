import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../state'

const rootReducer = { counter: counterSlice }

export default configureStore({
  reducer: rootReducer
})
