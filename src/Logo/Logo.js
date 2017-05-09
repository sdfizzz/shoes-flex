import React, { Component } from "react";
import logo from "./logo.png";

class Logo extends Component {
  render() {
    return (
      <img
        src={logo}
        srcSet="./logo@2x.png 2x, ./logo@3x.png 3x"
        alt=""
        class="logo"
      />
    );
  }
}

export default Logo;
