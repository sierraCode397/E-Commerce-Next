import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from "@context/AppContext";
import styles from "@styles/Menu.module.scss";

const Menu = () => {
	const { toggle, setToggle } = useContext(AppContext)

	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link to="/orders" className="title-Menu" onClick={() => setToggle(!toggle)}>My orders</Link>
				</li>
				<li>
					<Link to="/account" onClick={() => setToggle(!toggle)}>My account</Link>
				</li>
				<li>
					<Link to="/" onClick={() => setToggle(!toggle)}>Sign out</Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;