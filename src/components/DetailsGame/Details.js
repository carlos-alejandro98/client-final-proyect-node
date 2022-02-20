import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Details = ({ game }) => {
  const {
    title
  } = game;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="works" id="games">
        <div className="container">
          <div className="default-heading">
            <div className="row">
              <div className="col-md-6 col-12 boxDescription">
                <img className="imgDescription" src="" alt={title} />
                <hr />
                <div className="specs">
                  <strong>Platform: </strong>
                  
                  <br />
                  <strong>Genre: </strong>
                  
                  <br />
                  <strong>URl Game: </strong>
                  <a href=""></a>
                  <br />
                  <strong>Publisher: </strong>
                 
                  <br />
                  <strong>Release Date: </strong>
                  
                </div>
              </div>
              <div className="col-md-6 col-12">
                <h1>{title}</h1>
                <hr />
                <strong>Description: </strong>
                <p></p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <h2>Minimum Requirements</h2>
                  <h4>No Data</h4>
              </div>
              <div className="col-md-6 col-12 p-0 boxDescription">
                
              </div>
            </div>
          </div>
          <div className="text-center volver">
            <Link to="/">volver</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
