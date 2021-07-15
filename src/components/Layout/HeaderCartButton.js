import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  return (
    <button onClick={ props.showCartHandler } className={ classes.button }>
      <span className={ classes.icon } >
        <CartIcon />
      </span>
      <span>
        Your Chart 
      </span>
      <span className={ classes.badge }>
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;
