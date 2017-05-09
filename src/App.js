import React, { Component } from "react";

import "./css/normalize.css";
import "./css/responsive-grid.css";
import "./css/styles.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <aside className="aside-container">
          <Logo />
          <Search />
          <Menu />
        </aside>
        <section className="goods-panel">
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
      </div>
    );
  }
}

export default App;
