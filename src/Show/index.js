import React, { Component } from "react";
import "./styles.css";

import Header from "./Header";
import Carousel from "./Carousel";
import Description from "./Description";

export default class Show extends Component {
  render() {
    return (
      <section>
        <div className="product-main-panel">
          <Header />
          <Carousel />
          <Description />
        </div>
        <button className="product-buy-button">Buy Now </button>
      </section>
    );
  }
}
