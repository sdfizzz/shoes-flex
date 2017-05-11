import React, { Component } from "react";
import "./styles.css";

export default class Separator extends Component {
  render() {
    return (
      <div className="carousel-item-separator">
        <div className="carousel-separator-part" />
        <div className="carousel-separator-part" />
        <div className="carousel-separator-part" />
      </div>
    );
  }
}
