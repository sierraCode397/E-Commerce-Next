import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/NewPassword.scss';

import logo from "@logos/logo_yard_sale.svg";

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src= {logo} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new passwrd for yue account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<Link to="/" >
						<button className="primary-buttont login-button">Confirm</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;
