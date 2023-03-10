import React from 'react';
import Link from 'next/link';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
	return (
		<div className={styles.MyAccount}>
			<div className={styles["MyAccount-container"]}>
				<h1 className={styles["title-myAccount"]}>My account</h1>
				<form action="/" className={styles["form-myAccount"]}>
					<div>
						<label htmlFor="name" className={styles["label-myAccount"]}>Name</label>
						<p className={styles["value-myAccount"]}>UserExample</p>
						<label htmlFor="email" className={styles["label-myAccount"]}>Email</label>
						<p className={styles["value-myAccount"]}>UserExample@gmail.com</p>
						<label htmlFor="password" className={styles["label-myAccount"]}>Password</label>
						<p className={styles["value-myAccount"]}>*********</p>
					</div>
					<Link href="/createAccount">
						<button className={`${styles["secondary-button-myAccount"]} ${styles["login-button-myAccount"]}`}>Edit</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default MyAccount;