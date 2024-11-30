"use client";

import { useEffect, useState } from "react";

export interface IProps {
	delayTime?: number;
	children: React.ReactNode;
}

// the concept of the delayrender function it takes in the the props of the delayTIme and children
// on render it changes isDelay to true so the children would not be visible until the set time is accomplished
export function DelayRender({ delayTime = 100, children }: IProps) {
	const [isDelay, setIsDelay] = useState(true);

	useEffect(
		() => {
			setTimeout(() => setIsDelay(false), delayTime);
		},
		[delayTime]
	);
	return !isDelay && children;
}
