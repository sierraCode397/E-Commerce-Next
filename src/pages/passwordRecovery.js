import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
	return (
		<div className={styles.PasswordRecovery}>
			<div className={styles["PasswordRecovery-container"]}>
				<Image src= {logo} alt="logo" className={styles["logo-recovery"]} />
				<h1 className={styles["title-recovery"]}>Password recovery</h1>
				<p className={styles["subtitle-recovery"]}>Inform the email address used to create your account</p>
				<form action="/" className={styles["form-recovery"]}>
					<label htmlFor="email" className={styles["label-recovery"]}>Email address</label>
					<input type="text" id="email" className={`${styles["input-recovery"]} ${styles["input-email-recovery"]}`} />
					
					<Link href="/sendEmail">
						<button className={`${styles["primary-button-recovery"]} ${styles["login-button-recovery"]}`}>
							Confirm
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default PasswordRecovery;