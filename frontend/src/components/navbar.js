import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar  navbar-dark bg-dark navbar-expand-lg navbar-light bg-light ">

            <a className="navbar-brand" href="#">
                <img src="https://www.stockvault.net/data/2019/08/31/269064/thumb16.jpg" width="60" height="60"
                     alt=""></img><Link to="/">DECIDO</Link>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><Link to="/">Home</Link> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/About">About</Link></a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
