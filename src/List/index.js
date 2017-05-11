import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./styles.css";

import Filter from "./Filter";
import Card from "./Card";

class List extends Component {
  render() {
    return (
      <section className="list-container">
        <Grid fluid>
          <Filter />
          <Row>
            <Col xs={12} md={4} lg={3}>
              <Card isSale />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card isSale />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card isSale />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card isSale />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card />
            </Col>
            <Col xs={12} md={4} lg={3}>
              <Card isSale />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default List;
