import { Textarea } from "@/components/ui/text-area";
import WrapLabelAndError from "../_wrapForm";

interface IProps extends ISharedFormProps {}

export default function FormTextArea({ ...formProps }: IProps) {
	const { name, state } = formProps;
	return (
		<WrapLabelAndError name={name} state={state}>
			<Textarea name={name} placeholder="brief Detail about yor bussiness " />
		</WrapLabelAndError>
	);
}
