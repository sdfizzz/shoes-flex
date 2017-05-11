import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import LabelSale from "../../Labels/Sale";

import cardImg1x from "./bitmap.jpg";
import cardImg2x from "./bitmap@2x.jpg";
import cardImg3x from "./bitmap@3x.jpg";

export default class Card extends Component {
  render() {
    var saleClass = this.props.isSale ? "card-badge-sale" : "";
    return (
      <div className={"card-container " + saleClass}>
        <img
          src={cardImg1x}
          srcSet={cardImg2x + " 2x, " + cardImg3x + " 3x"}
          alt=""
          className="card-img"
        />
        <div className="card-price">
          <Link to="/detail">$170</Link>
        </div>
        <div className="label-sale-wrapper">
          <LabelSale />
        </div>
      </div>
    );
  }
}
