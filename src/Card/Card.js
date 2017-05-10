import React, { Component } from "react";
import { Link } from "react-router-dom";

import LabelSale from "../Labels/Sale/Sale";

import cardImg1x from "./bitmap.jpg";
import cardImg2x from "./bitmap@2x.jpg";
import cardImg3x from "./bitmap@3x.jpg";

class Card extends Component {
  render() {
    return (
      <div className="item-container item-badge-sale">
        <img
          src={cardImg1x}
          srcSet={cardImg2x + " 2x, " + cardImg3x + " 3x"}
          alt=""
          className="item-img"
        />
        <div className="item-price">
          <Link to="/detail">$170</Link>
        </div>
        <LabelSale />
      </div>
    );
  }
}

export default Card;
