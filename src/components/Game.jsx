import React, { useEffect } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Game = (props) => {

  const { data } = props;
  const { title, mainImage, slug } = data;
  
  useEffect(() => {}, []);

  return (
    <div className="col-md-4 box-games">
      <div className="work-item">
        <img className="img-responsive img-games" src={mainImage} alt="" />
        <h3>
          <Link to={`/game/${slug}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

// propsTypes
Game.propTypes = {
  data: propTypes.object,
  id: propTypes.number,
  mainImage: propTypes.string,
}; 

// native redux functions
const mapStateToProps = (state) => {
  return {
    favoriteGames: state.favoriteGames,
  };
};



export default connect(mapStateToProps)(Game);
