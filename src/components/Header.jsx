import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, setMenuMobile, toggleMenu, toggle, setToggle, toggleOrders, setToggleOrders } = useContext(AppContext);

  const verifyCart = (cartNumber) => {
    if (cartNumber && cartNumber < 9) {
      return <div>{cartNumber}</div>;
    } else if (cartNumber > 9) {
      return <div>+9</div>;
    } else if (cartNumber == 9) {
      return <div>9</div>;
    } else {
      return null;
    }
  };

  return (
    <nav className={styles.navegador}>
      <figure className={styles['menu-container']}>
        <Link href="/">
          <Image src={menu} alt="menu" onClick={() => setMenuMobile(!toggleMenu)} className={styles['menu-navegador']} />
        </Link>
      </figure>
      <div className={styles['navbar-left']}>
        <Image src={logo} alt="logo" className={styles['nav-logo']} />
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li>
            <button
              className={styles['navbar-email']}
              onClick={() => setToggle(!toggle)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  setToggle(!toggle);
                }
              }}
			  tabIndex={0}
            >
              userName@example.com
            </button>
          </li>
          <li>
            <button
              className={styles['navbar-shopping-cart']}
              onClick={() => setToggleOrders(!toggleOrders)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  setToggleOrders(!toggleOrders);
                }
              }}
			  tabIndex={0}
            >
              <Image src={shoppingCart} alt="shopping cart" />
              {verifyCart(state.cart.length)}
            </button>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      {toggleMenu && <MenuMobile />}
    </nav>
  );
};

export default Header;
