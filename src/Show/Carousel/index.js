import React, { Component } from "react";
import "./styles.css";

import MainImg from "./MainImg";
import Item from "./Item";
import Separator from "./Separator";
import More from "./More";

export default class Carousel extends Component {
  render() {
    return (
      <section>
        <MainImg />
        <div className="carousel-items">
          <Item />
          <Item />
          <Item />
          <Item />
          <Separator />
          <More />
        </div>
      </section>
    );
  }
}
