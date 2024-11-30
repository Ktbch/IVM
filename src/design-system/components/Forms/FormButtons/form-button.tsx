"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";
import Loader from "../../Loader";

export default function FormButton() {
	const { pending } = useFormStatus();
	return (
		<Button disabled={pending}>
			{pending ? <Loader /> : "Submit"}
		</Button>
	);
}
