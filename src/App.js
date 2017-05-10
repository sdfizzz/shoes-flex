import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

import List from "./List";
import ListItem from "./ListItem";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <aside className="aside-container">
            <Logo />
            <Search />
            <Menu />
          </aside>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={ListItem} />
        </div>
      </Router>
    );
  }
}

export default App;
