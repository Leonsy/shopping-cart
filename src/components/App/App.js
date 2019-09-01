import React, { Component } from "react";
import { Row, Col } from "antd";

import ProductList from "../../containers/ProductList";
import Cart from "../../containers/Cart";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Row type="flex" justify="center">
          <header className="app-header">
            <h1>Shopping Cart</h1>
          </header>
        </Row>
        <Row type="flex" justify="space-around">
          <Col md={20} lg={6} className="grid-column">
            <ProductList />
          </Col>
          <Col md={20} lg={14} className="grid-column">
            <Cart />
          </Col>
        </Row>
      </div>
    );
  }
}
