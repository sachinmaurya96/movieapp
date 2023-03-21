import React from 'react'
import { useParams } from 'react-router-dom'

function Moviedetails() {
  const {id} = useParams()
  return (
    <>
      <h1>id is {id}</h1>
    </>
  )
}

export default Moviedetails
