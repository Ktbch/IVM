"use server";

import AuthLayouts from "@/features/Authentication/client/auth-layouts";
import SignInView from "@/features/Authentication/client/views/signin-view";
import { AuthActionHandler } from "@/features/Authentication/server/auth-actions";
const SignIn = () => {
	return (
		<AuthLayouts title="signin">
			<SignInView actionFn={AuthActionHandler.signInActions} />
		</AuthLayouts>
	);
};

export default SignIn;
