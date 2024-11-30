"use client";

import { Loader2 } from "lucide-react";
import { DelayRender } from "./delay-render";

export default function Loader() {
	return (
		<DelayRender delayTime={1000}>
			<Loader2 />;
		</DelayRender>
	);
}
