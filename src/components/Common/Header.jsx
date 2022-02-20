import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSection } from "../../actions";

import logo from '../../assets/img/logo.png';

const Header = () => {
  const dispatch = useDispatch();

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  /* const { user } = useSelector((state) => ({ ...state })); */

  return (
    <header>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="row">
            <div className="navbar-header col-12 w-100" onClick={() => handleSetSection("Characters")}>
              <Link className="navbar-brand" to="/">
                <img className="img-responsive imgHeader" src={logo} alt="Logo" />
              </Link>
            </div>

           {/*  {!user && (
              <div className="ir-favorito" onClick={() => handleSetSection("Login")}>
                <Link to="#"><h3>Iniciar Sesion <i className="fal fa-swords"></i></h3></Link>
              </div>
            )}

            {!user && (
              <div className="ir-favorito" onClick={() => handleSetSection("Register")}>
                <Link to="/login"><h3>Registrarse <i className="fal fa-swords"></i></h3></Link>
              </div>
            )} */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
