import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			</figure>
			<p>Camera</p>
			<p>$30,00</p>
		</div>
	);
}

export default ShoppingCartItem;
