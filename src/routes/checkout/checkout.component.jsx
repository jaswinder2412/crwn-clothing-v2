import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartitem) => {
      return(  <CheckOutItem key={cartitem.id} cartItem={cartitem}></CheckOutItem>)
        
      }
      )}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
