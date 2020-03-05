import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import { addToCart } from "../ducks/cart";

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
)(ProductList);
