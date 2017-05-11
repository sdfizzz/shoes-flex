import React, { Component } from "react";
import "./styles.css";

export default class MainImg extends Component {
  render() {
    return (
      <img
        src={require("./main.jpg")}
        srcSet={
          require("./main@2x.jpg") + " 2x, " + require("./main@3x.jpg") + " 3x"
        }
        alt={this.props.name}
        className="carousel-main-img"
      />
    );
  }
}
