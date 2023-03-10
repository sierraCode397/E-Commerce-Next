import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/NewPassword.module.scss';

const NewPassword = () => {
	return (
		<>
			<Head>
				<title>NewPaswword</title>
			</Head>
			<div className={styles.NewPassword}>
				<div className={styles["NewPassword-container"]}>
					<Image src= {logo} alt="logo" className={styles["logo-password"]} />
					<h1 className={styles["title-password"]}>Create a new password</h1>
					<p className={styles["subtitle-password"]}>Enter a new passwrd for yue account</p>
					<form action="/" className={styles["form-password"]}>
						<label htmlFor="password" className={styles["label-password"]}>Password</label>
						<input type="password" id="password" placeholder="*********" className={`${styles["input-password"]} ${styles["input-password-new"]}`} />
						<label htmlFor="new-password" className={styles["label-password"]}>Password</label>
						<input type="password" id="new-password" placeholder="*********" className={`${styles["input-password"]} ${styles["input-password-new"]}`} />
						<Link href="/login" >
							<button className={`${styles["primary-buttont-password"]} ${styles["login-button-password"]}`}>Confirm</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default NewPassword;