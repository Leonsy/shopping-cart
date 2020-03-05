import React, { Component } from "react";
import { Row, Col } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainLayout from '../../layout/MainLayout';
import ProductList from "../../containers/ProductList";
import Cart from "../../containers/Cart";

export default class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/list">
              <Row type="flex" justify="space-around">
                <Col md={20} className="grid-column">
                  <ProductList />
                </Col>
              </Row>
            </Route>
            <Route path="/cart">
              <Row type="flex" justify="space-around">
                <Col md={20} className="grid-column">
                  <Cart />
                </Col>
              </Row>
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    );
  }
};
