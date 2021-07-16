
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  console.log(state,'this is satte reducer', action)
  if (action.type === 'ADD') {
   
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const exsitingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const exsitingCartItem = state.items[exsitingCartItemIndex]

    console.log(exsitingCartItem)
    let updatedItems;

    if ( exsitingCartItem ) { 
      const updatedItem = {
        ...exsitingCartItem,
        amount: exsitingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[exsitingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    }
  }

  if (action.type === 'REMOVE') {
    const exisitingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
    const exisitingItem = state.items[exisitingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - exisitingItem.price;
    let updatedItems;

    if ( exisitingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updatedItem = {...exisitingItem, amount: exisitingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[exisitingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState
}


const CartProvider = props => {
  const [cartState, dispatchCartAction] =  useReducer(cartReducer, defaultCartState)
  const addItemToCarthandler = (item) => {
    dispatchCartAction({
      type: 'ADD',
      item: item,
    })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE',
      id:id
    })

  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
