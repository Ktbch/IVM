"use client";

import FormSchema, { TFormFields } from "@/components/app/SchemaForm";
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
	fields: TFormFields[];
}

//  with this i dont think zod validation on the frontend and react-hook-form is neccasrry

function AuthView({ actionFn, fields }: IProps) {
	const [state, authAction] = useActionState(actionFn, undefined);
	const { pending } = useFormStatus();

	return <FormSchema fields={fields} />;
}

export default AuthView;
