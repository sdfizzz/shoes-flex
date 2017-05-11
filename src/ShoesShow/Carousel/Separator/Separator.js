import React, { Component } from "react";
import "./styles.css";

class Separator extends Component {
  render() {
    return (
      <div className="product-carousel-item-separator">
        <div className="product-carousel-separator-part" />
        <div className="product-carousel-separator-part" />
        <div className="product-carousel-separator-part" />
      </div>
    );
  }
}

export default Separator;
