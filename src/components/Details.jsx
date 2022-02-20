import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";
import { setSection } from "../actions";

const Details = ({ game, platformGame, genreGame }) => {

  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  const {
    title,
    platform,
    genre,
    url,
    description,
    mainImage
  } = game;

  //Platform Name
  const arrayPlatform = platformGame.filter(platformSelect => platformSelect._id === platform);

  const namePlatform = arrayPlatform.map(namePlatform => namePlatform.name);

  //Genre Name
  const arrayGenre = genreGame.filter(genreSelect => genreSelect._id === genre);

  const nameGenre = arrayGenre.map(nameGenre => nameGenre.name);


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
                <img className="imgDescription" src={mainImage} alt={title} />
                <hr />
                <div className="specs">
                  <strong>Platform: </strong>
                  {namePlatform}
                  <br />
                  <strong>Genre: </strong>
                  {nameGenre}
                  <br />
                  <strong>URL Game: </strong>
                  <a href={url}>Visitar</a>
                  <br />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <h1>{title}</h1>
                <hr />
                <strong>Description: </strong>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="text-center volver" onClick={() => handleSetSection("Characters")}>
            <Link to="/">volver</Link>
          </div>
        </div>
      </div>
    </>
  );
};

// propsTypes
Details.propTypes = {
  data: propTypes.object,
  title: propTypes.string,
  mainImage: propTypes.string,
  platform: propTypes.string,
  genre: propTypes.string,
  url: propTypes.string,
};

export default Details;
