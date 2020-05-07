import React, { Component } from "react";
import { Row, Col } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainLayout from '../../layout/MainLayout';
import ProductPage from "../../containers/ProductPage";
import Cart from "../../containers/CartPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/list">
              <ProductPage />
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
