"use client";

import { Label } from "@/components/ui/label";

interface IProps extends Partial<ISharedFormProps> {
	children: React.ReactNode;
}

export default function WrapLabelAndError({ ...props }: IProps) {
	const { name, state, type, children } = props;
	return (
		<div className="flex flex-col gap-5 items-start">
			<Label htmlFor={name}>
				{name}
			</Label>
			{children}
			{ state?.errors[ name ] && <p>{state.errors[name] }</p>}
		</div>
	);
}
