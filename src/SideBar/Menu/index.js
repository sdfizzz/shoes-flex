import React, { Component } from "react";
import "./styles.css";
import arrow from "./arrow.svg";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <nav id="main-menu">
        <div className="main-menu-selected">
          <Link to="/">
            <span>SPORTS</span>
            <img src={arrow} srcSet="" alt="" className="menu-arrow" />
          </Link>
        </div>
        <nav id="sub-menu">
          <div className="sub-menu-selected">
            <Link to="/">SHOES</Link>
          </div>
          <div>
            <Link to="/">CLOTHING</Link>
          </div>
          <div>
            <Link to="/">ACCESORIES</Link>
          </div>
        </nav>
        <div>
          <Link to="/">BRANDS</Link>
        </div>
        <div>
          <Link to="/">MICOACH</Link>
        </div>
      </nav>
    );
  }
}
