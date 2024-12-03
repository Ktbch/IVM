"use server";

import SignInView from "@/features/Authentication/client/views/signin-view";
import { AuthActionHandler } from "@/features/Authentication/server/auth-actions";
const SignIn = () => {
	return <SignInView actionFn={AuthActionHandler.signInActions} />;
};

export default SignIn;
