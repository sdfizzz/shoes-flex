import React, { Component } from "react";

import img1x from "./img.jpg";
import img2x from "./img@2x.jpg";
import img3x from "./img@3x.jpg";

class Item extends Component {
  render() {
    return (
      <button>
        <img src={img1x} srcSet={img2x + " 2x, " + img3x + " 3x"} alt="" />
      </button>
    );
  }
}

export default Item;
