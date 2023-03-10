import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import email from "@icons/email.svg";
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/SendEmail.module.scss';

const SendEmail = () => {
	return (
		<>
			<Head>
				<title>SentEmail</title>
			</Head>
			<div className={styles.SendEmail}>
				<div className={styles["form-container"]}>
					<Image src= {logo} alt="logo" className={styles["logo-email"]} />
					<h1 className={styles["title-email"]}>Email has been sent!</h1>
					<p className={styles["subtitle-email"]}>Please check your inbox for instructions on how to reset the password</p>
					<div className={styles["email-image"]}>
						<Image src={email} alt="email" />
					</div>

					<Link href="/newPassword">
						<button className={`${styles["primary-button-email"]} ${styles["login-button-email"]}`}>
							Login
						</button>
					</Link>
					
					<p className={styles["resend-email"]}>
						<span>Didn&apos;t receive the email?</span>
						<Link href="/passwordRecovery">Resend</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SendEmail;