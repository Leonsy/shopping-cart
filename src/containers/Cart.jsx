import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { removeFromCart, getCartList } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        cartItems: getCartList(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (name) => dispatch(removeFromCart(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
