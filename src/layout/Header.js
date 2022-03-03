import React, { useContext } from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../contexts/CartContext";


const Header = () => {
  let { pathname } = useLocation();
  let title = "";
  const {carts} = useContext(CartContext);

  if (pathname === '/') title = 'Photos';
  if (pathname === '/about') title = 'About';
  if (pathname === '/contact') title = 'Contact';
  if (pathname === '/blog') title = 'Blog';
  if (pathname.includes('photo')) title = 'Photos';

  return (
    <div className="Header">
      <Navbar />
      <div>
        <h4>{carts.length}</h4>
        <MdShoppingCart/>
      </div>
      <h3>{title}</h3>
    </div>
  );
};
export default Header;
