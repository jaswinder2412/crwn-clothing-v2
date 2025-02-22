import './cart-item.styles.scss'



const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt="" />
            <div className='item-details'>

            <span className='name'>{name}</span>
            <span>{quantity} X ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;