import React, { Component } from "react";
import "./styles.css";

import filter1x from "./filter.png";
import filter2x from "./filter@2x.png";
import filter3x from "./filter@3x.png";

export default class Icon extends Component {
  render() {
    return (
      <div className="filter-icon-wrapper">
        <img
          src={filter1x}
          srcSet={filter2x + " 2x, " + filter3x + " 3x"}
          alt=""
          className="filter-icon"
        />
      </div>
    );
  }
}
