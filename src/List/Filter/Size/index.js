import React, { Component } from "react";
import "./styles.css";

export default class Size extends Component {
  render() {
    return (
      <div className="size-container">
        <span className="size-container-head">SIZE</span>
        <button>36</button>
        <button>37</button>
        <button>38</button>
        <button>39</button>
        <button>40</button>
        <button className="size-selected">41</button>
        <button>42</button>
      </div>
    );
  }
}
