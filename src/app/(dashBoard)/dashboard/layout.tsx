"use client";

import DashbaordLayoutClient from "@/features/dashboard/client/dashbaord-layout";
import { ReactNode } from "react";

export default function DashBoardlayout({ children }: { children: ReactNode }) {
	return (
		<div className="">
			<DashbaordLayoutClient />
			{children}
		</div>
	);
}
