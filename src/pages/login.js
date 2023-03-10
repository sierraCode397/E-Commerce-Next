import React, {useRef} from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "@logos/logo_yard_sale.svg";
import styles from '@styles/Login.module.scss';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get("email"),
			password: formData.get("password"),
		};
		console.log(data);
	};

	return (
		<div className={styles.Login}>
			<div className={styles["Login-container"]}>
				<Image src= {logo} alt="logo" className={styles["logo-login"]} />
				<form action="/" className={styles["form-login"]} ref={form}>
					<label htmlFor="email" className={styles["label-login"]}>Email address</label>
					<input type="text" name="email" placeholder="userEmail@example.com" className={`${styles["input-login"]} ${styles["input-password-login"]}`} />
					<label htmlFor="password" className={styles["label-login"]}>Password</label>
					<input type="password" name="password" placeholder="*********" className={`${styles["input-login"]} ${styles["input-password-login"]}`}/>
					<Link href="/">
						<button className={styles["primary-button-login"]} onClick={handleSubmit}>
							Log in
						</button>
					</Link>
					<Link href="/passwordRecovery">Forgot my password</Link>
				</form>
				
				<Link href="/createAccount">
					<button className={`${styles["secondary-button-login"]} ${styles["signup-button-login"]}`}>
						Create account
					</button>
				</Link> 
			</div>
		</div>
	);
};

export default Login;