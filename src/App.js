import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import SideBar from "./SideBar/SideBar";

import List from "./ShoesShow/List";
import ListItem from "./ShoesShow/ListItem";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <SideBar />
          <Route exact path="/" component={List} />
          <Route path="/detail" component={ListItem} />
        </div>
      </Router>
    );
  }
}
