import React, { Component } from "react";
import { Row, Col } from "antd";

import MainLayout from '../../layout/MainLayout';
import ProductList from "../../containers/ProductList";
import Cart from "../../containers/Cart";

export default class App extends Component {
  render() {
    return (
        <MainLayout>
          <Row type="flex" justify="space-around">
            <Col md={20} lg={6} className="grid-column">
              <ProductList />
            </Col>
            <Col md={20} lg={14} className="grid-column">
              <Cart />
            </Col>
          </Row>
        </MainLayout>
    );
  }
}
