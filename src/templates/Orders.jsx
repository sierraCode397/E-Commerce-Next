import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/Orders.scss';

const Orders = () => {
	const {state} = useContext(AppContext)

	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`}/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Orders;
