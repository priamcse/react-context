import React, { useReducer, useEffect } from "react";
import CartContext from "./cart-context";

const CART_ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  INIT: "init",
  RESET: "reset",
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// export const initialCartState = (defaultCartState) => {
//   JSON.parse(localStorage.getItem("cart")) || defaultCartState;
// };

const cartReducer = (state, action) => {
  if (action.type === CART_ACTIONS.INIT) {
    return action.item;
  }

  if (action.type === CART_ACTIONS.RESET) {
    localStorage.setItem("cart", JSON.stringify(defaultCartState));
    return defaultCartState;
  }

  if (action.type === CART_ACTIONS.ADD) {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //console.log("", exisitingCartItemIndex);
    const existingCartItem = state.items[exisitingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      // only updating the match
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      // getting added for first time
      updatedItems = state.items.concat(action.item);
    }

    const updatedCartState = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    localStorage.setItem("cart", JSON.stringify(updatedCartState));
    return updatedCartState;
  }

  if (action.type === CART_ACTIONS.REMOVE) {
    const existCheckForRemoveIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existRemoveItem = state.items[existCheckForRemoveIndex];
    console.log(existRemoveItem);
    let removeUpdatedItems;
    if (existRemoveItem.quantity === 1) {
      removeUpdatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const removeUpdateItem = {
        ...existRemoveItem,
        quantity: existRemoveItem.quantity - 1,
      };
      removeUpdatedItems = [...state.items];
      removeUpdatedItems[existCheckForRemoveIndex] = removeUpdateItem;
    }

    const removeTotal = state.totalAmount - existRemoveItem.price;
    const updatedCartState = {
      items: removeUpdatedItems,
      totalAmount: removeTotal,
    };
    localStorage.setItem("cart", JSON.stringify(updatedCartState));
    return updatedCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      dispatchCartAction({
        type: CART_ACTIONS.INIT,
        item: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }, []);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // Can set Item like this - but have to check is it first initial or not
  // IN THIS EXAMPLE - I have set it on action
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartState));
  // }, [cartState]);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: CART_ACTIONS.ADD,
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: CART_ACTIONS.REMOVE,
      id: id,
    });
  };
  const resetCartHandler = () => {
    dispatchCartAction({
      type: CART_ACTIONS.RESET,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    resetCart: resetCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
