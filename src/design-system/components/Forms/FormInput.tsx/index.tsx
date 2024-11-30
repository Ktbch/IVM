"use client";

import WrapLabelAndError from "../_wrapForm";

interface IProps extends ISharedFormProps {}

export default function FormInput({ ...formProps }: IProps) {
	const { name, state, type } = formProps;
	return <WrapLabelAndError name={name} type={type} state={state} />;
}
