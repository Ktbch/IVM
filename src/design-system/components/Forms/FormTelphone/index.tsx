import WrapLabelAndError from "../_wrapForm";

interface IProps extends ISharedFormProps {}

export default function FormTelPhone({ ...formProps }: IProps) {
	return <WrapLabelAndError {...formProps} />;
}
