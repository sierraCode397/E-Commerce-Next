import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import styles from '@styles/Orders.module.scss';

const Orders = () => {
	const {state} = useContext(AppContext);

	return (
		<div className={styles.Orders}>
			<div className={styles["Orders-container"]}>
				<h1 className={styles["title-orders"]}>My orders</h1>
				<div className={styles["Orders-content"]}>
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Orders;