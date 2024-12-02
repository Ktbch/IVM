"use client";

import FormSchema, { TFormFields } from "@/components/app/SchemaForm";

import { useActionState } from "react";

// first actual design pattern i want to create a hook or mutation

// 3
// const useMutation = () => {
//     const [] = useActionState()
// }

interface IProps {
	actionFn: (state: any, data: FormData) => Promise<AuthFormState>;
	fields: TFormFields[];
}

//  with this i dont think zod validation on the frontend and react-hook-form is neccasrry

function AuthView({ actionFn, fields }: IProps) {
	const [state, authAction] = useActionState(actionFn, undefined);
	return <FormSchema fields={fields} formActions={authAction} state={state} />;
}

export default AuthView;
