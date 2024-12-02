import FormButton from "@/design-system/components/Forms/FormButtons/form-button";
import RenderForm from "./_renderForm";

export interface TFormFields {
	type: TFormTypes;
	name: string;
}

interface IProps extends Partial<ISharedFormProps> {
	fields: TFormFields[];
	formActions: (payload: FormData) => void;
}

export default function FormSchema({ ...formProps }: IProps) {
	const { fields, state, formActions } = formProps;
	return (
		<form action={formActions}>
			{fields.map((field, index) =>
				<RenderForm
					key={index}
					name={field.name}
					type={field.type}
					state={state}
				/>
			)}
			<FormButton />
		</form>
	);
}
