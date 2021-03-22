import React from 'react'

const PrimaryButton = ({ title, ...rest }) => {
  return (
    <button className='btn btn-primary' {...rest}>{title}</button>
  )
}

export default PrimaryButton
