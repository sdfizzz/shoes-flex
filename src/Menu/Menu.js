import React, { Component } from "react";
import arrow from "./arrow.svg";

class Menu extends Component {
  render() {
    return (
      <nav id="main-menu">
        <a href="#" className="selected">
          <span>SPORTS</span>
          <img src={arrow} srcSet="" alt="" className="menu-arrow" />
        </a>
        <nav id="sub-menu">
          <a href="#" className="selected">SHOES</a>
          <a href="#">CLOTHING</a>
          <a href="#">ACCESORIES</a>
        </nav>
        <a href="#">BRANDS</a>
        <a href="#">MICOACH</a>
      </nav>
    );
  }
}

export default Menu;
