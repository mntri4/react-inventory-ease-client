import React from 'react';

import SignInForm from './signIn-form';
import HandleLogin from './handle-login';

//Component containing SignInForm and HandleLogin components
//This is part of main inventoryEase component that is routed to by sign in Link
export default function SignInPage(props) {
	return (
		<div>
			<SignInForm />
			<HandleLogin />
		</div>
		);
}