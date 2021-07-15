import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = props => {
  const cartItems = <ul className={ classes['cart-items'] }>{[
    {id:'c1', name:'Susi', amount: 2, price: 12.99}
  ].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <Modal hideCartHandler={ props.hideCartHandler }>
      {cartItems}
      <div className={ classes.total }>
        <span>Total Amount</span>
        <span>45.33</span>
      </div>
      <div className={ classes.actions }> 
        <button onClick={ props.hideCartHandler } className={ classes['button--alt'] }>Close</button>
        <button className={ classes.button }>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;
