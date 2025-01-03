import FormInput from "@/design-system/components/Forms/FormInput.tsx";
import FormNumber from "@/design-system/components/Forms/FormNumber.tsx";
import FormTelPhone from "@/design-system/components/Forms/FormTelphone";
import FormTextArea from "@/design-system/components/Forms/FormTextArea";
import React from "react";

// interface IProps extends ISharedFormProps {}

export default function RenderForm({ ...formProps }: ISharedFormProps) {
	const { type } = formProps;

	switch (type) {
		case "text":
		case "email":
		case "password":
			return <FormInput {...formProps} />;
		case "number":
			return <FormNumber {...formProps} />;
		case "tel":
			return <FormTelPhone {...formProps} />;
		case "text-area":
			return <FormTextArea {...formProps} />;
	}
}
