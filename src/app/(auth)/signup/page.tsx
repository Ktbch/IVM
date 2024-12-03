"user server";
import AuthLayouts from "@/features/Authentication/client/auth-layouts";
import SignUpView from "@/features/Authentication/client/views/signup-view";
import { AuthActionHandler } from "@/features/Authentication/server/auth-actions";

const SignUp = () => {
	return (
		<AuthLayouts title="signup">
			<SignUpView actionFn={AuthActionHandler.signUpActions} />
		</AuthLayouts>
	);
};

export default SignUp;
