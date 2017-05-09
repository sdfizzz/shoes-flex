import React, { Component } from "react";

import "./css/normalize.css";
import "./css/responsive-grid.css";
import "./css/styles.css";

import Filter from "./Filter/Filter";
import Card from "./Card/Card";

class List extends Component {
  render() {
    return (
      <section className="list-container">
        <div className="row">
          <Filter />
        </div>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </section>
    );
  }
}

export default List;
