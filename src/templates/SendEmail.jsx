import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/SendEmail.scss';
import email from "@icons/email.svg"
import logo from "@logos/logo_yard_sale.svg";

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src= {logo} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>

				<Link to="/new-password">
					<button className="primary-button-email login-button">
						Login
					</button>
				</Link>
				
				<p className="resend">
					<span>Didn't receive the email?</span>
					<Link to="/password-recovery">Resend</Link>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;
