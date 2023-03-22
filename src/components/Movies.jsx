import React from 'react'
import { useGlobalcontext } from './context'

function Movies() {
    const {movie} = useGlobalcontext();
  return (
    <>
      {
          movie.map((elem)=>{
            return (<h1>movie name is  {elem.Title}</h1>)
          })
        } 
    </>
  )
}

export default Movies
