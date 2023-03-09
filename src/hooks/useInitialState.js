import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const date = new Date();
  const formattedDate = date.toLocaleString();

  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMenu, setMenuMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  return {
    toggleOrders,
    setToggleOrders,
    toggle,
    setToggle,
    toggleMenu,
    setMenuMobile,
    /*  */
    state,
    addToCart,
    removeFromCart,
    sumTotal,
    formattedDate,
  };
};

export default useInitialState;
