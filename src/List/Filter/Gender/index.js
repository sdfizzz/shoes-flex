import React, { Component } from "react";
import "./styles.css";

export default class Gender extends Component {
  render() {
    return (
      <div className="gender-container">
        <button className="gender-selected">MAN</button>
        <button>WOMAN</button>
      </div>
    );
  }
}
