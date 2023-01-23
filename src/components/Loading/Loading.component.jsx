import React from 'react'
import { LoadingContainer, Spinner } from './Loading.style'

const Loading = () => {
  return (
    <LoadingContainer>
        <Spinner />
        <span>Loading</span>
    </LoadingContainer>
  )
}

export default Loading