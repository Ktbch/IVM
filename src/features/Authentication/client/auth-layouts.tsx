interface IProps {
	children: React.ReactNode;
	title: string;
}

export default function AuthLayouts({ children, title }: IProps) {
	return (
		<div className="flex gap-5 flex-col items-center">
			<h1 className="border-b-4">
				{title}
			</h1>
			{children}
		</div>
	);
}
