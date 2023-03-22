
import React, { useContext, useEffect, useState } from "react";
const api_url = "http://www.omdbapi.com/?apikey=df77d5e2&s=Avengers";



const Appcontext = React.createContext();
const AppProvider = ({children})=>{
  const [loading , setLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [iserror,setIserror] = useState({show:"false", msg:""})
  
  const getmovies = async (url)=>{
    try{
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)
      if(data.Response){
        setMovie(data.Search);
        setLoading(true)
        console.log("response")
       
      }else{
        setIserror(
          {
            show:"true",
            msg: data.error
          }
        )
      }

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getmovies(api_url)
  }, [])
  console.log(movie)
  return <Appcontext.Provider value={{iserror , movie , loading}}>{children}</Appcontext.Provider>
}
const useGlobalcontext = () =>{
  return useContext(Appcontext)
}
export {Appcontext,AppProvider,useGlobalcontext};
