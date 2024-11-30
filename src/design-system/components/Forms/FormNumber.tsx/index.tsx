"use client";

import WrapLabelAndError from "../_wrapForm";

interface IProps extends ISharedFormProps {}

export default function FormNumber({ ...formProps }: IProps) {
	const { name, state, type } = formProps;
	return <WrapLabelAndError {...formProps} />;
}
