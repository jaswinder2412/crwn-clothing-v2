import './checkout-item.styles.scss'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({ cartItem }) => {  
  const {clearCartItem, addItemToCart, deleteItemCart} = useContext(CartContext)

  const clearItemHandler = () => clearCartItem(cartItem)
  const deleteItemCartHandler = () => deleteItemCart(cartItem)
  const addItemToCartHandler = () => addItemToCart(cartItem)

    const {  name, imageUrl,quantity, price } = cartItem;
    return (
      <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
          
           <span onClick={() => deleteItemCartHandler(cartItem)}>&#10094;</span>  &nbsp;
          {quantity}
          &nbsp;
          
          <span onClick={() => addItemToCartHandler(cartItem)}>&#10095;</span>
          </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
      </div>
    );
}
 
export default CheckOutItem;  