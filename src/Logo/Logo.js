import React, { Component } from "react";
import logo1x from "./logo.png";
import logo2x from "./logo@2x.png";
import logo3x from "./logo@3x.png";

class Logo extends Component {
  render() {
    return (
      <img
        src={logo1x}
        srcSet={logo2x + " 2x, " + logo3x + " 3x"}
        alt=""
        className="logo"
      />
    );
  }
}

export default Logo;
