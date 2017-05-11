import React, { Component } from "react";
import "./styles.css";

import Icon from "./Icon";
import Gender from "./Gender";
import Size from "./Size";

export default class Filter extends Component {
  render() {
    return (
      <div className="filters-container">
        <Icon />
        <div className="filter-item">
          <Gender />
        </div>
        <div className="filter-item">
          <Size />
        </div>
      </div>
    );
  }
}
