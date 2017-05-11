import React, { Component } from "react";
import "./styles.css";

import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

export default class SideBar extends Component {
  render() {
    return (
      <aside className="sidebar-container">
        <Logo />
        <Search />
        <Menu />
      </aside>
    );
  }
}
