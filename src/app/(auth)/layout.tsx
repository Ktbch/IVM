const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="absolute top-[25%] left-[39%] ">
			<div className="border p-5">
				{children}
			</div>
		</div>
	);
};

export default layout;
