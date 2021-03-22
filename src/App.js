import React from 'react'
import { PrimaryButton } from './components'
import { FlexContainer } from './lib/styled-component'
import { useQuery } from 'react-query'
import { getPost } from './services/api'

const App = () => {
  const { isLoading, error, data } = useQuery('getPost', getPost)

  if (isLoading && !data) return 'loading...'

  if (error) return <div>Could not load api</div>

  return (
    <FlexContainer className='TB'>
      <h1 style={{ marginRight: 20 }}>{data.title}</h1>
      <PrimaryButton title='hello' />
    </FlexContainer>
  )
}

export default App
