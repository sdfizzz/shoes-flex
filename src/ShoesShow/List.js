import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./List.css";

import Filter from "./Filter/Filter";
import Card from "./Card/Card";

class List extends Component {
  render() {
    return (
      <section className="list-container">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Filter />
            </Col>
          </Row>
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
