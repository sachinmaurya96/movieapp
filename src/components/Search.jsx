import React, { useState } from "react";
import { useGlobalcontext } from "./context";

function Search() {
  const {query,setQuery,iserror} = useGlobalcontext()
  const [input,setInput] = useState("");
  const submit =()=>{
    setQuery(input)
    console.log(input)
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand">Movie</a>
          <form className="d-flex" onSubmit={(e)=>e.preventDefault()}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
            <button className="btn btn-dark" onClick={submit}>Search</button>
          </form>
        </div>
      </nav>
      <div>
        <p className="text-center">{iserror.show && iserror.msg}</p>
      </div>
    </>
  );
}

export default Search;
