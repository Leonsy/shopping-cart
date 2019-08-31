import React, { Component } from "react";
import { Row, Col } from "antd";

import ProductList from "../../containers/ProductList";
import Cart from "../../containers/Cart";

export default class App extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <header className="App-header">Shopping Cart</header>
        </Row>
        <Row type="flex" justify="space-around">
          <Col md={24} lg={6}><ProductList /></Col>
          <Col md={24} lg={14}><Cart /></Col>
        </Row>
      </div>
    );
  }
}
