import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    incrementAsync: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
const { increment, decrement, incrementByAmount } = counterSlice.actions

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const incrementAsync = amount => async dispatch => {
  await sleep(2000)
  return dispatch(counterSlice.actions.incrementAsync(amount))
}

export {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
}

export default counterSlice.reducer
