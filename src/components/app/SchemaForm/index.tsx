import RenderForm from "./_renderForm";

export interface TFormFields {
	type: TFormTypes;
	name: string;
}

interface IProps extends Partial<ISharedFormProps> {
	fields: TFormFields[];
}

export default function FormSchema({ ...formProps }: IProps) {
	const { fields, state } = formProps;
	return (
		<form>
			{fields.map(field =>
				<RenderForm name={field.name} type={field.type} state={state} />
			)}
		</form>
	);
}
