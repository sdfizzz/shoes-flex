import React, { Component } from "react";
import arrow from "./arrow.svg";

class Menu extends Component {
  render() {
    return (
      <nav id="main-menu">
        <a href="#" class="selected">
          <span>SPORTS</span>
          <img src={arrow} alt="" class="menu-arrow" />
        </a>
        <nav id="sub-menu">
          <a href="#" class="selected">SHOES</a>
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
