import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import MenuMobile from "@components/MenuMobile";
import AppContext from "@context/AppContext";
import menu from "@icons/icon_menu.svg"
import logo from "@logos/logo_yard_sale.svg"
import shoppingCart from "@icons/icon_shopping_cart.svg"
import styles from "@styles/Header.module.scss";

const Header = () => {
	const { state, setMenuMobile, toggleMenu, toggle, setToggle, toggleOrders, setToggleOrders } = useContext(AppContext)

	const verifyCart = (cartNumber) => {
		if (cartNumber && (cartNumber < 9)) {
		  return (
			<div>{cartNumber}</div>
		  );
		} else if (cartNumber > 9) {
		  return (
			<div>+9</div>
		  )
		}else if (cartNumber == 9) {
			return (
			  <div>9</div>
			)
		}
		 else {
		  return null;
		}
	  }

	return (
		<nav className={styles.navegador}>
			<figure className='menu-container'>
				<img src={menu} alt="menu" onClick={() => setMenuMobile(!toggleMenu)} className="menu" />
			</figure>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<Link to="/login">All</Link>
					</li>
					<li>
						<Link to="/login">Clothes</Link>
					</li>
					<li>
						<Link to="/login">Electronics</Link>
					</li>
					<li>
						<Link to="/login">Furnitures</Link>
					</li>
					<li>
						<Link to="/login">Toys</Link>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={() => setToggle(!toggle)}>userName@example.com</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{verifyCart(state.cart.length)}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
			{toggleMenu && <MenuMobile />}
		</nav>
		
	);
}

export default Header;