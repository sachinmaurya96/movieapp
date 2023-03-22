import React from "react";
import {  useNavigate , useParams } from "react-router-dom";
import { useGlobalcontext } from "./context";

function Moviedetails() {
  const { id } = useParams();
  const {movie} = useGlobalcontext()
  let history = useNavigate();


  const data = movie.filter((e)=>{
    return e.imdbID === id
  })
  console.log(data)
  return (
    <>
      <div className="container details" style={{height:"100vh"}}>
        <div className="row">
          <div className="" >
           {
             data?.map((e)=>{
              const {Title,Year,Poster,imdbID} = e
              return <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={Poster} className="img-fluid rounded-start" alt={imdbID} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title ">{Title}</h5>
                    <p className="card-text ">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa minus sapiente id. A amet tenetur delectus quibusdam veritatis pariatur quidem eius. Nostrum atque impedit odio perferendis esse quam ipsam quia, soluta nobis ea animi aspernatur quos cumque neque. Quas architecto facere quo sed. Unde sint dolore omnis quibusdam rerum!
                    </p>
                    <p className="card-text ">
                      <small className="text-muted">Release Year {Year}</small>
                    </p>
                    <button className="btn btn-primary">Watch online</button>
                    <button className="btn btn-primary mx-2">Download</button>
                    <button className="btn btn-primary mx-2 mt-2" onClick={() => history(-1)}>Go back</button>
                  </div>
                </div>
              </div>
            </div>
            })
           }
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviedetails;
