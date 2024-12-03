"use client";

import React, { useActionState } from "react";
import FormSchema, { TFormFields } from "@/components/app/SchemaForm";

const SIGNIN_FIELDS_CONFIG: TFormFields[] = [
	{
		name: "email",
		type: "email"
	},
	{
		name: "password",
		type: "password"
	}
];

interface IProps {
	actionFn: (state: any, data: FormData) => Promise<AuthFormState>;
}
const SignInView = ({ actionFn }: IProps) => {
	const [state, authAction] = useActionState(actionFn, undefined);

	return (
		<FormSchema
			fields={SIGNIN_FIELDS_CONFIG}
			formActions={authAction}
			state={state}
		/>
	);
};

export default SignInView;
