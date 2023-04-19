import React, {useContext} from "react";
import Link from "next/link";
import AppContext from "@context/AppContext";
import styles from "@styles/MenuMobile.module.scss";

const MenuMobile = () => {
    const { setMenuMobile, toggleMenu } = useContext(AppContext);

  return (

    <nav className={styles["mobile-menu"]}>

            <ul>
                <li className={styles["title-menu-mobile"]}>
                    <Link href="/" className={styles["title-menu"]}>CATEGORIES</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>All</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>Clothes</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>Electronics</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>Furnitures</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>Toys</Link>
                </li>
                <li>
                    <Link href="/" onClick={() => setMenuMobile(!toggleMenu)}>Others</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/orders" onClick={() => setMenuMobile(!toggleMenu)}>My orders</Link>
                </li>
                <li >
                    <Link href="/myAccount" onClick={() => setMenuMobile(!toggleMenu)}>My account</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link href="/" className={styles["email-mobile-menu"]} onClick={() => setMenuMobile(!toggleMenu)}>Example@gmail.com</Link>
                </li>
                <li>
                    <Link href="/login" className={styles["sing-out"]} onClick={() => setMenuMobile(!toggleMenu)}>Sing out</Link>
                </li>
            </ul>

        </nav>
    );
};

export default MenuMobile;