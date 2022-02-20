import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "../assets/css/bootstrap.css";
import "../assets/css/style.css";

import NotFound from "../components/NotFound";
import Header from "../components/Common/Header";
import Banner from "../components/Common/Banner";
import Footer from "../components/Common/Footer";
import Loader from "../components/Loader";

import GameDetails from '../containers/GamesDetails';
import Register from '../pages/auth/Register';
//import Games from "../containers/Games";

const Games = lazy(() => import("../containers/Games"));

const handleUp = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
};

const App = () => (
  
  <BrowserRouter>
    <Header />
    <Banner />
    <Suspense
        fallback={
          <Loader />
        }
      >
    <Switch>
      
        <Route exact path="/" component={Games} />
        <Route exact path="/game/:game_id" component={GameDetails} />
        <Route exact path="/login" component={Register} />
        <Route component={NotFound} />
        
    </Switch>
    </Suspense>
    
    <div className="ir-arriba btnTop" onClick={handleUp} title="Volver arriba">
      <span className="fa-stack">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className="fa fa-arrow-up fa-stack-1x fa-inverse"></i>
      </span>
    </div>
    
    <Footer />
  </BrowserRouter>
);

export default App;
