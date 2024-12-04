"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function FormButton() {
	const { pending } = useFormStatus();
	return (
		<Button disabled={pending} className="w-full">
			{pending ? "submiting..." : "submit"}
		</Button>
	);
}
