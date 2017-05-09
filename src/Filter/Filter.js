import React, { Component } from "react";
import filter1x from "./filter.png";
import filter2x from "./filter@2x.png";
import filter3x from "./filter@3x.png";

class Filter extends Component {
  render() {
    return (
      <div className="filters-container">
        <div className="filter-image-wrapper">
          <img
            src={filter1x}
            srcSet={filter2x + " 2x, " + filter3x + " 3x"}
            className="filter-image"
          />
        </div>
        <div className="filter-item" id="male-female-filter">
          <button className="selected">MAN</button>
          <button>WOMAN</button>
        </div>
        <div className="filter-item" id="size-filter">
          <span className="filter-item-head">SIZE</span>
          <button>36</button>
          <button>37</button>
          <button>38</button>
          <button>39</button>
          <button>40</button>
          <button className="selected">41</button>
          <button>42</button>
        </div>
      </div>
    );
  }
}

export default Filter;
