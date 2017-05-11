import React, { Component } from "react";
import "./styles.css";

export default class Item extends Component {
  render() {
    return (
      <div className="carousel-item">
        <button>
          <img
            src={require("./img.jpg")}
            srcSet={
              require("./img@2x.jpg") +
                " 2x, " +
                require("./img@3x.jpg") +
                " 3x"
            }
            alt={this.props.name}
          />
        </button>
      </div>
    );
  }
}
