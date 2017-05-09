import React, { Component } from "react";
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
        <a href="./detail.html" className="item-price">$170</a>
        <span className="item-sale">SALE</span>
      </div>
    );
  }
}

export default Card;
