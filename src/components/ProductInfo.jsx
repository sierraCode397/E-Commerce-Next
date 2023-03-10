import React from 'react';
import Image from "next/image";
import addToCart from "@icons/bt_add_to_cart.svg";
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
	return (
		<>
			<Image src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			<div className={styles.ProductInfo}>
				<p>$35,00</p>
				<p>Camera</p>
				<p>Con este practico articulo podras mantener vigilado todo lo que tu quieras.</p>
				<button className={styles["primary-button-info", "add-to-cart-button-info"]}>
					<Image src= {addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;
