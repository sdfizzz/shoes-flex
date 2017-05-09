import React, { Component } from "react";
import "./css/styles.css";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

class App extends Component {
  render() {
    return (
      <aside class="aside-container">
        <Logo />
        <Search />
        <Menu />
      </aside>
    );
  }
}

export default App;
