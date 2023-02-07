import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import CartItem from '../cart-item/cart-item.component' 

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutPage = () => {
        navigate('/checkout')
    } 

    return (
        <CartDropdownContainer>
            <CartItems>
                    { cartItems.length ? (cartItems.map((item) => <CartItem key={item.div} cartItem={item}/>) ):
                    (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                     ) }
                   
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckoutPage}>Go To Checkout</Button>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown