import React, { Component } from "react";

import Header from "./ListItem-Header/Header";
import MainImg from "./ListItem-MainImg/MainImg";
import CarouselItem from "./Carousel/Item/Item";
import CarouselSeparator from "./Carousel/Separator/Separator";
import CarouselMore from "./Carousel/More/More";

import "./css/normalize.css";
import "./css/responsive-grid.css";
import "./css/styles.css";
import "./css/detail.css";

class ListItem extends Component {
  render() {
    return (
      <section>
        <div className="product-main-panel">
          <Header />

          <section>
            <MainImg />
            <div className="product-carousel">
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselSeparator />
              <CarouselMore />
            </div>
          </section>
          <p className="product-description">
            <span className="product-description-first-word">Adidas </span>
            is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
          </p>
        </div>
        <button className="product-buy-button">Buy Now</button>
      </section>
    );
  }
}

export default ListItem;
