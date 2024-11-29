"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { useFormState, useFormStatus } from "react-dom";

// first actual design pattern i want to create a hook or mutation

// 3
// const useMutation = () => {
//     const [] = useActionState()
// }

interface IProps {
	actionFn: (state: any, data: FormData) => any;
}

//  with this i dont think zod validation on the frontend and react-hook-form is neccasrry
const AuthView = ({ actionFn }: IProps) => {
	const [state, authAction] = useActionState(actionFn, undefined);
	const { pending } = useFormStatus();

	return (
		<form action={authAction}>
			<div>
				<Label htmlFor="email">Email</Label>
				<Input type="email" name="email" />
			</div>
			<div>
				<Label htmlFor="password">password</Label>
				<Input type="password" name="password" />
			</div>
			<Button disabled={pending}>Submit</Button>
		</form>
	);
};

export default AuthView;
