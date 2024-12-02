"use client";

import React from "react";
import AuthView from "../auth-view";
import { SignInActions, signUpActions } from "../../server/auth-actions";
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
	},
	{
		name: "confirmPassword",
		type: "password"
	}
];

const SignUpView = () => {
	return <AuthView actionFn={signUpActions} fields={SIGNUP_FIELDS_CONFIG} />;
};

export default SignUpView;
