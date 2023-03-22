
import React, { useContext, useEffect, useState } from "react";
const api_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;



const Appcontext = React.createContext();
const AppProvider = ({children})=>{
  const [loading , setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [iserror,setIserror] = useState({show:"false", msg:""})
  const [query,setQuery] = useState("hollywood")
  const [res,setRes] = useState()
  
  const getmovies = async (url)=>{
    try{
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)
      setRes(data.Response)
      if(data.Response === "True"){
        setMovie(data.Search);
        setLoading(false)
        
       
      }else{
        setIserror(
          {
            show:"true",
            msg: data.Error
          }
        )
      }

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getmovies(`${api_url}&s=${query}`)
  }, [query])
  return <Appcontext.Provider value={{iserror , movie , loading, query, setQuery ,res}}>{children}</Appcontext.Provider>
}

const useGlobalcontext = () =>{
  return useContext(Appcontext)
}
export {Appcontext,AppProvider,useGlobalcontext};
