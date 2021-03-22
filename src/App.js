import React from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'

import { getPost } from './services/api'
import { FlexContainer } from './lib/styled-component'
import { PrimaryButton } from './components'
import { incrementAsync } from './state/counter'

const App = () => {
  const { isLoading, error, data } = useQuery('getPost', getPost)
  const counter = useSelector(state => state.counter.value)

  const dispatch = useDispatch()

  if (isLoading && !data) return 'loading...'

  if (error) return <div>Could not load api</div>

  return (
    <FlexContainer className='TB'>
      <h1 style={{ marginRight: 20 }}>{counter}. {data.title}</h1>
      <PrimaryButton title='hello' onClick={() => dispatch(incrementAsync(10))} />
    </FlexContainer>
  )
}

export default App
