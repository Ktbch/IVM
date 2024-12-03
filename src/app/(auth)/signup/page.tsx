"user server";
import SignUpView from "@/features/Authentication/client/views/signup-view";
import { AuthActionHandler } from "@/features/Authentication/server/auth-actions";

const SignUp = () => {
	return <SignUpView actionFn={AuthActionHandler.signUpActions} />;
};

export default SignUp;
