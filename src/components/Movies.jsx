import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalcontext } from "./context";
import Loading from "./Loading";

function Movies() {
  const { movie ,loading} = useGlobalcontext();
  if(loading){
    return <Loading/>
  }
 
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            { !movie ? <p className="text-light text-center">movie not found</p> :  movie.map((elem) => {
              const { Poster, Title, Year, imdbID } = elem;
              return (
                <NavLink
                  to={`movie/${imdbID}`}
                  key={imdbID}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 link"
                >
                  <div>
                    <div className="card mb-3">
                      <img src={Poster} className="card-img-top" alt={imdbID} />
                      <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            realese date {Year}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Movies;
