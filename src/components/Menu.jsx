import React, {useContext} from 'react';
import Link from 'next/link';
import AppContext from "@context/AppContext";
import styles from "@styles/Menu.module.scss";

const Menu = () => {
	const { toggle, setToggle } = useContext(AppContext);

	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/orders" className="title-Menu" onClick={() => setToggle(!toggle)}>My orders</Link>
				</li>
				<li>
					<Link href="/myAccount" onClick={() => setToggle(!toggle)}>My account</Link>
				</li>
				<li>
					<Link href="/login" onClick={() => setToggle(!toggle)}>Sign out</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;