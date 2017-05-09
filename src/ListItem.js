import React, { Component } from "react";

import "./css/normalize.css";
import "./css/responsive-grid.css";
import "./css/styles.css";
import "./css/detail.css";

class ListItem extends Component {
  render() {
    return (
      <section>
        <div class="product-main-panel">
          <header class="header-block">
            <div class="header-left-block">
              <h1>ULTRA<br />BOOST</h1>
              <button class="button-save">SAVE</button>
            </div>
            <div class="header-right-block">
              <div class="header-right-block-labels">
                <button class="label-dark-gray" />
                <button class="label-blue" />
                <button class="label-black" />
                <button class="label-gray" />
                <span class="label-sale">SALE</span>
              </div>
              <h2>$170</h2>
            </div>
          </header>

          <section>
            <img
              src="img/details/main.jpg"
              srcset="img/details/main@2x.jpg 2x, img/details/main@3x.jpg 3x"
              alt=""
              class="product-main-img"
            />
            <div class="product-carousel">
              <button>
                <img
                  src="img/details/small-1.jpg"
                  srcset="img/details/small-1@2x.jpg 2x, img/details/small-1@3x.jpg 3x"
                  alt=""
                  class="product-carousel-item"
                />
              </button>
              <button>
                <img
                  src="img/details/small-2.jpg"
                  srcset="img/details/small-2@2x.jpg 2x, img/details/small-2@3x.jpg 3x"
                  alt=""
                  class="product-carousel-item"
                />
              </button>
              <button>
                <img
                  src="img/details/small-3.jpg"
                  srcset="img/details/small-3@2x.jpg 2x, img/details/small-3@3x.jpg 3x"
                  alt=""
                  class="product-carousel-item"
                />
              </button>
              <button>
                <img
                  src="img/details/small-4.jpg"
                  srcset="img/details/small-4@2x.jpg 2x, img/details/small-4@3x.jpg 3x"
                  alt=""
                  class="product-carousel-item"
                />
              </button>
              <div class="product-carousel-item-separator">
                <div class="product-carousel-separator-part" />
                <div class="product-carousel-separator-part" />
                <div class="product-carousel-separator-part" />
              </div>
              <button class="product-carousel-item-more">
                see<br />more<br />photos
              </button>
            </div>
          </section>
          <p class="product-description">
            <span class="product-description-first-word">Adidas</span>
            {" "}
            is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
          </p>
        </div>
        <button class="product-buy-button">Buy Now</button>
      </section>
    );
  }
}

export default ListItem;
