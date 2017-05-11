import React, { Component } from "react";
import "./styles.css";

import LabelSale from "../Labels/Sale/Sale";

class Header extends Component {
  render() {
    return (
      <header className="header-block">
        <div className="header-left-block">
          <h1>ULTRA<br />BOOST</h1>
          <button className="button-save">SAVE</button>
        </div>
        <div className="header-right-block">
          <div className="header-right-block-labels">
            <button className="label-dark-gray" />
            <button className="label-blue" />
            <button className="label-black" />
            <button className="label-gray" />
            <div className="label-sale-wrapper">
              <LabelSale />
            </div>
          </div>
          <h2>$170</h2>
        </div>
      </header>
    );
  }
}

export default Header;
