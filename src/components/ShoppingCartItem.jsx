import React from 'react';
import Image from "next/image";
import styles from '@styles/ShoppingCartItem.module.scss';

const ShoppingCartItem = () => {
	return (
		<div className={styles.ShoppingCartItem}>
			<figure>
				<Image src="https://imgur.com/C9u9gLm.jpg" alt="Camera" />
			</figure>
			<p>Camera</p>
			<p>$30,00</p>
		</div>
	);
}

export default ShoppingCartItem;
