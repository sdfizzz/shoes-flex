import React, { Component } from "react";
import "./styles.css";

export default class Description extends Component {
  render() {
    return (
      <p className="product-description">
        <span className="product-description-first-word">Adidas </span>
        is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
      </p>
    );
  }
}
