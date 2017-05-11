import React, { Component } from "react";
import "./styles.css";

import main1x from "./main.jpg";
import main2x from "./main@2x.jpg";
import main3x from "./main@3x.jpg";

class MainImg extends Component {
  render() {
    return (
      <img
        src={main1x}
        srcSet={main2x + " 2x, " + main3x + " 3x"}
        alt=""
        className="product-main-img"
      />
    );
  }
}

export default MainImg;
