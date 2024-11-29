"use client";

import React from "react";
import AuthView from "../auth-view";
import { SignInActions } from "../../server/auth-actions";

const SignInView = () => {
	return <AuthView actionFn={SignInActions} />;
};

export default SignInView;
