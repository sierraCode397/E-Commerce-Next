import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/Checkout.scss';

const Checkout = () => {
	const {state, sumTotal, formattedDate} = useContext(AppContext)

	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order checkout</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{formattedDate}</span>
							<span>{state.cart.length} Articulos</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
				</div>
				{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
			</div>
		</div>
	);
}

export default Checkout;
