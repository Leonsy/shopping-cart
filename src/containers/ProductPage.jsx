import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import ProductList from "../components/ProductList";
import { addToCart } from "../ducks/cart";

const ProductPage = ({ products, addToCart }) => (
  <Row type="flex" justify="space-around">
    <Col md={20} className="grid-column">
      <ProductList products={products} addToCart={addToCart}/>
    </Col>
  </Row>
);

const mapStateToProps = (state, props) => {
  return {
    products: state.products.items
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: name => dispatch(addToCart(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
