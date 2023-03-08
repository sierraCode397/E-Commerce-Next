import React from 'react';
import '@styles/ProductInfo.scss';

import addToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
	return (
		<>
			<img src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Camera</p>
				<p>Con este practico articulo podras mantener vigilado todo lo que tu quieras.</p>
				<button className="primary-button add-to-cart-button">
					<img src= {addToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
