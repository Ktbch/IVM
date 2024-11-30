"use client";

import React from "react";
import AuthView from "../auth-view";
import { SignInActions } from "../../server/auth-actions";
import { TFormFields } from "@/components/app/SchemaForm";

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

const SignInView = () => {
	return <AuthView actionFn={SignInActions} fields={SIGNIN_FIELDS_CONFIG} />;
};

export default SignInView;
