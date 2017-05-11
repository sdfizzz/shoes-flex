import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import SideBar from "./SideBar";

import List from "./List";
import Show from "./Show";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <SideBar />
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Show} />
        </div>
      </Router>
    );
  }
}
