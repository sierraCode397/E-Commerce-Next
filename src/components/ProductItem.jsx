import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addTo from "@icons/bt_add_to_cart.svg";
import addEnd from "@icons/bt_added_to_cart.svg"

const ProductItem = ({producth}) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = item => {
			!state.cart.includes(item) ? addToCart(item): removeFromCart(item);
	    };

	return (
		<div className="ProductItem">
				<img src={producth.images[0]} alt={producth.title} />
			<div className="product-info">
				<div>
					<p>${producth.price}</p>
					<p>{producth.title}</p>
				</div>
				<figure onClick={() => handleClick(producth)} className="container-Addto">
					{state.cart.includes(producth) ? <img src={addEnd} alt="add-to-card" /> : <img src={addTo} alt="add-to-card" />}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;