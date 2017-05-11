import React, { Component } from "react";
import "./styles.css";

import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="aside-container">
        <Logo />
        <Search />
        <Menu />
      </aside>
    );
  }
}
