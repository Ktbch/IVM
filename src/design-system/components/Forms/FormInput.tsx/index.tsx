"use client";

import { Input } from "@/components/ui/input";
import WrapLabelAndError from "../_wrapForm";

// interface IProps extends ISharedFormProps {}

export default function FormInput({ ...formProps }: ISharedFormProps) {
	const { name, state, type } = formProps;
	return (
		<WrapLabelAndError name={name} state={state}>
			<Input type={type} name={name} placeholder={`${name}`} />
		</WrapLabelAndError>
	);
}
