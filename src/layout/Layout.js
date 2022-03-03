import React , {useReducer, useState} from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CartContext from "../contexts/CartContext";
import CartReducer from "../reducers/CartReducer";

const Layout = ({ children }) => {

  let carts = JSON.parse(localStorage.getItem('pageCarts'));
    const [state, dispatch] = useReducer(CartReducer, {carts: carts});

  return (

    <CartContext.Provider
    value={{
        carts : state.carts,
        dispatchCart : dispatch,
    }}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </CartContext.Provider>
  );
};
export default Layout;
