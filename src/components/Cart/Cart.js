import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';


const Cart = props => {
  const cartCtx = useContext(CartContext)

  const hasItems = cartCtx.items.length > 0
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1 })
  }

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItems = <ul className={ classes['cart-items'] }> {cartCtx.items.map((item) => 
    <CartItem key={ item.id } name={ item.name } amount= {item.amount} price={ item.price } onAdd={ addItemHandler.bind(null, item) } onRemove={ removeItemHandler.bind(null ,item.id) }/>
  )} </ul>;

  return (
    <Modal hideCartHandler={ props.hideCartHandler }>
      {cartItems}
      <div className={ classes.total }>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      <div className={ classes.actions }> 
        <button onClick={ props.hideCartHandler } className={ classes['button--alt'] }>Close</button>
        {hasItems && <button className={ classes.button }>Order</button> } 
      </div>
    </Modal>
  )
}

export default Cart;
