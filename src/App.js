import React from 'react'
import { PrimaryButton } from './components'
import { FlexContainer } from './lib/styled-component'

const App = () => {
  return (
    <FlexContainer className='TB'>
      <h1 style={{ marginRight: 20 }}>hello world</h1>
      <PrimaryButton title='hello' />
    </FlexContainer>
  )
}

export default App
