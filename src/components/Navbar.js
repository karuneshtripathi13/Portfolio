import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <nav id="navpos" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a id="logo" className="navbar-brand" href="#Home" style={{padding:0,paddingLeft:10,margin:0,paddingRight:50}}>
        KT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={faBars} style={{color:"gold"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#Home" >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe">
              ABOUT ME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Skillset">
              SKILLSET
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">
              EDUCATION
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
             PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
