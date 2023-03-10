import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@styles/CreateAccount.module.scss';

const CreateAccount = () => {
	return (
		<>
			<Head>
				<title>CreateAccount</title>
			</Head>
			<div className={styles.CreateAccount}>
				<div className={styles["CreateAccount-container"]}>
					<h1 className={styles["title-account"]}>My account</h1>
					<form action="/" className={styles["form-account"]}>
						<div>
							<label htmlFor="name" className={styles["label-account"]}>Name</label>
							<input type="text" id="name" placeholder="Teff" className={`${styles["input-account"]} ${styles["input-password-account"]}`} />
							<label htmlFor="email" className={styles["label-account"]}>Email</label>
							<input type="text" id="email" placeholder="platzi@example.com" className={`${styles["input-account"]} ${styles["input-password-account"]}`} />
							<label htmlFor="password" className={styles["label-account"]}>Password</label>
							<input type="password" id="password" placeholder="*********" className={`${styles["input-account"]} ${styles["input-password-account"]}`} />
						</div>
						<Link href="/">
							<button className={`${styles["primary-button-account"]} ${styles["login-button-account"]}`} >Create</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateAccount;