"use client";

import React from "react";
import AuthView from "../../auth-view";
import { SignInActions } from "../../../server/auth-actions";
import FormSchema, { TFormFields } from "@/components/app/SchemaForm";
import { useRouter } from "next/navigation";

const SIGNUP_FIELDS_CONFIG: TFormFields[] = [
	{
		name: "email",
		type: "email"
	},
	{
		name: "password",
		type: "password"
	}
];

const SignUpEmailAndPasswordForm = () => {
	const { push } = useRouter();
	const saveFirstFormToLocalStorage = (payload: FormData) => {
		if (typeof window !== "undefined") {
			localStorage.setItem(
				"emailAndPassword",
				JSON.stringify(Object.fromEntries(payload))
			);
			push("/more-info");
		}
	};
	return (
		<FormSchema
			fields={SIGNUP_FIELDS_CONFIG}
			formActions={saveFirstFormToLocalStorage}
		/>
	);
};

const SignUpView = () => {
	return <SignUpEmailAndPasswordForm />;
};

export default SignUpView;
