import { Card } from "@/components/ui/card";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="absolute top-[15%] left-[39%] ">
			<Card className="flex flex-col items-center  gap-2">
				{children}
			</Card>
		</div>
	);
};

export default layout;
