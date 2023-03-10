import React, { useContext, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import arrow from "@icons/flechita.svg";
import styles from "@styles/MyOrder.module.scss";

const MyOrder = () => {
	const {state, sumTotal, toggleOrders, setToggleOrders} = useContext(AppContext);

	const [menu, setMenu] = useState(true);
	const handleMenu = () => {
	  if (menu == false) {
		setMenu(true);
	  } else {
		setMenu(false);
	  }
	};

	if (menu == true) {
		return (
			<aside className={styles.MyOrder}>
				<div className={styles["title-container"]}>		
						<Image src= {arrow} alt="arrow" onClick={handleMenu} className={styles.arrow} />
					<Link href="/orders" className={styles["title-myOrder"]} onClick={()=> setToggleOrders(!toggleOrders)}>My order</Link>
				</div>
				<div className={styles["my-order-content"]}>
					{state.cart.map(product => (
						<OrderItem product={product} key={`orderItem-${product.id}`}/>
					))}
					<div className={styles["my-order"]}>
						<p>
							<span>Total</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					<Link href="/checkout" onClick={() => setToggleOrders(!toggleOrders)}>
						<button className={styles["primary-button-myOrder"]}>
							Checkout 
						</button>
					</Link>
				</div>

			</aside>
		);
	}
};

export default MyOrder;