import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function WrapLabelAndError({ ...props }: ISharedFormProps) {
	const { name, state, type } = props;
	return (
		<div className="flex flex-col gap-5 items-start">
			<Label htmlFor={name}>
				{name}
			</Label>
			<Input type={type} placeholder={name} name={name} />
		</div>
	);
}
