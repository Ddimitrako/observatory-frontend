import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar  navbar-dark bg-green navbar-expand-lg navbar-light bg-light ">


            <Link to="/"><img src={require('../images/logos/logo-decido.png')} width="60" height="30"
                              alt=""></img></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/">HOME</Link> <span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/About">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
