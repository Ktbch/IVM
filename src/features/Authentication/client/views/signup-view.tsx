"use client";
import React, { useActionState } from "react";
import FormSchema, { TFormFields } from "@/components/app/SchemaForm";

const SIGNUP_FIELDS_CONFIG: TFormFields[] = [
	{
		name: "email",
		type: "email"
	},
	{
		name: "password",
		type: "password"
	},
	{
		name: "confirmPassword",
		type: "password"
	}
];

interface IProps {
	actionFn: (
		state: AuthFormState | undefined,
		data: FormData
	) => Promise<AuthFormState>;
}
const SignUpView = ({ actionFn }: IProps) => {
	const [state, authAction] = useActionState(actionFn, undefined);

	return (
		<FormSchema
			fields={SIGNUP_FIELDS_CONFIG}
			formActions={authAction}
			state={state}
		/>
	);
};

export default SignUpView;
